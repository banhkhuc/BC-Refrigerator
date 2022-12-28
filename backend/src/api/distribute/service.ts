import { Request } from 'express';
import ResponeCodes from 'utils/constants/ResponeCode';
import paginate from 'utils/helpers/pagination';
import { Product, ProductLine } from 'databases/models';
import { ProductModel } from 'databases/models/Product';
import ProductStatus from 'utils/constants/ProductStatus';
import ImportPayload from './ImportPayload';
import ExportPayload from './ExportPayload';
import Order, { OrderModel } from 'databases/models/Order';
import sequelize from 'databases';

const getProducts = async (req: Request) => {
	try {
		const { offset, limit, order } = paginate(req);
		const distributeId = req.user.Facility.id;

		const products = await Product.findAndCountAll({
			where: {
				distributeId,
				status: ProductStatus.INSTOCK
			},
			offset,
			limit,
			order: [order]
		});

		return products;
	} catch (error) {
		throw error;
	}
};

const getProductById = async (req: Request) => {
	try {
		let data: ProductModel;
		let message: string;
		let status: number;

		const id = parseInt(req.params.id);

		if (isNaN(id)) {
			message = 'Invalid identifier.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			const product = await Product.findByPk(id, {
				include: ProductLine
			});
			if (!product) {
				message = 'Not found.';
				status = ResponeCodes.NOT_FOUND;
			} else {
				data = product;
				message = 'Get successfully!';
				status = ResponeCodes.OK;
			}
		}

		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const importProduct = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const distributeId = req.user.Facility.id;
		const importData: ImportPayload = req.body;
		const { products, distributeDate } = importData;

		if (products.length === 0) {
			message = 'Invalid payload.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			await Promise.all(
				products.map(async productCode => {
					Product.update(
						{
							distributeId,
							distributeDate,
							status: ProductStatus.INSTOCK
						},
						{
							where: {
								code: productCode,
								status: ProductStatus.PRODUCED
							}
						}
					);
				})
			);

			message = 'Import successfully!';
			status = ResponeCodes.OK;
		}

		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const exportProduct = async (req: Request) => {
	const transaction = await sequelize.transaction();
	try {
		let data: OrderModel;
		let message: string;
		let status: number;

		const distributeId = req.user.Facility.id;
		const exportData: ExportPayload = req.body;

		const product = await Product.findOne({
			where: {
				code: exportData.productCode
			}
		});

		if (!exportData.productCode || !exportData.orderName) {
			message = 'Invalid payload.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			if (product.distributeId !== distributeId || product.status !== ProductStatus.INSTOCK) {
				message = 'Invalid product.';
				status = ResponeCodes.BAD_REQUEST;
			} else {
				const order = await Order.create(
					{
						...exportData,
						distributeId
					},
					{ transaction }
				);
				await product.update(
					{
						status: ProductStatus.SOLD
					},
					{ transaction }
				);
				await transaction.commit();
				data = order;
				message = 'Export successfully!';
				status = ResponeCodes.CREATED;
			}
		}
		return {
			data,
			message,
			status
		};
	} catch (error) {
		await transaction.commit();
		throw error;
	}
};

export { getProducts, getProductById, importProduct, exportProduct };
