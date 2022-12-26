import { Request } from 'express';
import { ProductLine } from 'databases/models';
import ResponeCodes from 'utils/constants/ResponeCode';
import ProductLines from './ProductLines';
import paginate from 'utils/helpers/pagination';
import { Op } from 'sequelize';

const getProductLine = async (req: Request) => {
	try {
		const { query } = paginate(req);

		const productLines  = await ProductLine.findAll({
			where: {
				name: {
					[Op.like]: `%${query}%`
				}
			},
		});
		return productLines;
	} catch (error) {
		throw error;
	}
};

const getProductLineById = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const id = parseInt(req.params.id);

		if (isNaN(id)) {
			data = null;
			message = 'Invalid identifier.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			const productLine = await ProductLine.findByPk(id);
			if (!productLine) {
				data = null;
				message = 'Not found.';
				status = ResponeCodes.NOT_FOUND;
			} else {
				data = productLine;
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

const addProductLine = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const newProductLines: ProductLines = req.body;
		
		if (!newProductLines.name) {
			data = null;
			message = 'Name null.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			const [productline, created] = await ProductLine.findOrCreate({
				where: {
					name: newProductLines.name
				},
				defaults: {
					...newProductLines
				}
			});

			if (created) {
				data = productline;
				message = 'Add successfully!';
				status = ResponeCodes.CREATED;
			} else {
				data = null;
				message = 'productline exists.';
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

const updateProductLine = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const id = parseInt(req.params.id);

		if (isNaN(id)) {
			data = null;
			message = 'Invalid identifier.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			const updateProductLine = req.body;
			data = await ProductLine.update(updateProductLine, {
				where: {
					id
				}
			});
			message = 'Updated successfully!';
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



export { getProductLine, getProductLineById, addProductLine, updateProductLine};
