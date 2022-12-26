import config from 'config';
import jwt from 'jsonwebtoken';
import { addTimeByMinute } from './timeService';

const generateAccount = (id: number) => {
	const idx = id.toString().padStart(6, '0');
	return 'BC' + idx;
};

const generatePassword = () => {
	return Math.random().toString(36).slice(-8);
};

const generateCode = () => {
	const code = `${Math.floor(100000 + Math.random() * 900000)}`;
	const expires = addTimeByMinute(new Date(Date.now()), 30);
	return {
		code,
		expires
	};
};

const generateToken = (userId: number) => {
	const token = jwt.sign({ userId }, config.secret_key, {
		expiresIn: config.expires_in
	});
	return token;
};

export { generateAccount, generatePassword, generateCode, generateToken };
