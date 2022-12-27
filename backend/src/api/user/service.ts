import bcrypt from 'bcrypt';
import { Request } from 'express';
import { Role, User } from 'databases/models';
import ResponeCodes from 'utils/constants/ResponeCode';
import UserInfo from './UserInfo';
import paginate from 'utils/helpers/pagination';
import { Op } from 'sequelize';
import RoleCodes from 'utils/constants/RoleCode';
import { UserModel } from 'databases/models/User';

const getUsers = async (req: Request) => {
	try {
		const { limit, offset, order, query } = paginate(req);

		const roleId = (req.query.role as string) || RoleCodes.CUSTOMER;

		const users = await User.findAndCountAll({
			where: {
				[Op.or]: [
					{
						email: {
							[Op.like]: `%${query}%`
						}
					},
					{
						fullName: {
							[Op.like]: `%${query}%`
						}
					}
				]
			},
			include: {
				model: Role,
				where: {
					id: roleId
				},
				attributes: []
			},
			limit,
			offset,
			order: [order]
		});
		return users;
	} catch (error) {
		throw error;
	}
};

const getUserById = async (req: Request) => {
	try {
		let data: UserModel;
		let message: string;
		let status: number;

		const id = parseInt(req.params.id);

		if (isNaN(id)) {
			message = 'Invalid identifier.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			const user = await User.findByPk(id);
			if (!user) {
				message = 'User not found.';
				status = ResponeCodes.NOT_FOUND;
			} else {
				data = user;
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

const getMe = async (req: Request) => {
	try {
		let data: UserModel;
		let message: string;
		let status: number;

		const user = req.user;

		data = user;
		message = 'Get successfully!';
		status = ResponeCodes.OK;

		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const changeInfo = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const user = req.user;
		const info: UserInfo = req.body;

		await user.update({
			fullName: info.fullName
		});

		message = 'Update user successfully!';
		status = ResponeCodes.OK;

		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const verifyPassword = async (req: Request) => {
	try {
		let data: boolean;
		let message: string;
		let status: number;
		const user = req.user;
		const password = req.body.password;
		const verifyPassword = bcrypt.compareSync(password, user.password);

		if (!verifyPassword) {
			data = false;
			message = 'Incorrect password.';
			status = ResponeCodes.OK;
		} else {
			data = true;
			message = 'Correct password.';
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

const checkNewPassword = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;
		const user = req.user;
		const newPassword = req.body.password;
		const duplicate = bcrypt.compareSync(newPassword, user.password);

		data = !duplicate;
		message = duplicate ? 'Duplicate password' : 'OK';
		status = ResponeCodes.OK;

		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const changePassword = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const user = req.user;
		const newPassword = bcrypt.hashSync(req.body.password, 10);

		data = await user.update({
			password: newPassword
		});
		message = 'Change password successfully!';
		status = ResponeCodes.OK;

		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const deleteUser = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const id = parseInt(req.params.id);

		if (isNaN(id)) {
			message = 'Invalid user identifier.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			await User.destroy({
				where: {
					id
				}
			});
			message = 'Delete user successfully!';
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

export { getUsers, getUserById, deleteUser, changeInfo, changePassword, verifyPassword, checkNewPassword, getMe };
