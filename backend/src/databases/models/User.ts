import bcrypt from 'bcrypt';
import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
	NonAttribute,
	HasManySetAssociationsMixin
} from 'sequelize';
import sequelize from 'databases';
import Role, { RoleModel } from './Role';
export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
	// Some fields are optional when calling UserModel.create() or UserModel.build(	)
	id: CreationOptional<number>;
	account: string;
	password: string;
	fullName: string;
	email: string;
	createdAt: CreationOptional<Date>;
	updatedAt: CreationOptional<Date>;

	Roles?: NonAttribute<RoleModel[]>;
	setRoles: HasManySetAssociationsMixin<RoleModel, RoleModel['id']>;
}

const User = sequelize.define<UserModel>(
	'User',
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		account: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING
		},
		fullName: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		}
	},
	{
		tableName: 'user',
		underscored: true
	}
);

User.beforeCreate(user => {
	const hashedPassword = bcrypt.hashSync(user.password, 10);
	user.password = hashedPassword;
});

Role.hasMany(User);
User.belongsTo(Role);

export default User;
