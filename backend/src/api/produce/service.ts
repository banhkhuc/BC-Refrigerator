import { Request } from 'express';
import ResponeCodes from 'utils/constants/ResponeCode';
import paginate from 'utils/helpers/pagination';
import { Product, ProductLine } from 'databases/models';
import { ProductModel } from 'databases/models/Product';
import ProductStatus from 'utils/constants/ProductStatus';
import ImportPayLoad from './ImportPayload';
import ExportPayload from './ExportPayload';
import { generateProductCode } from 'utils/helpers/generate';

const getProducts = async (req: Request) => {
	try {
		const { offset, limit, order } = paginate(req);
		const produceId = req.user.Facility.id;

		const products = await Product.findAndCountAll({
			where: {
				produceId,
				status: ProductStatus.PRODUCED
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
		let data: ProductModel;
		let message: string;
		let status: number;

		const importData: ImportPayLoad = req.body;
		const produceId = req.user.Facility.id;

		if (!importData.productLineModel) {
			message = 'Invalid payload.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			const productCode = await generateProductCode(importData.productLineModel);
			const product = await Product.create({
				...importData,
				code: productCode,
				produceId,
				status: ProductStatus.PRODUCED
			});
			data = product;
			message = 'Import successfully!';
			status = ResponeCodes.CREATED;
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
	try {
		let data;
		let message: string;
		let status: number;

		const exportData: ExportPayload = req.body;
		const { products, distributeId, distributeDate } = exportData;

		if (!distributeId || products.length === 0) {
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
								code: productCode
							}
						}
					);
				})
			);

			message = 'Export successfully!';
			status = ResponeCodes.CREATED;
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

export { getProducts, getProductById, importProduct, exportProduct };
