import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from 'databases';

export interface OrderModel extends Model<InferAttributes<OrderModel>, InferCreationAttributes<OrderModel>> {
	id: CreationOptional<number>;
	saleDate: Date;
	customerName: string;
	customerPhone: string;
	customerAddress: string;
	createdAt: CreationOptional<Date>;
	updatedAt: CreationOptional<Date>;
}

const Order = sequelize.define<OrderModel>(
	'Order',
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		saleDate: {
			allowNull: false,
			type: DataTypes.DATE
		},
		customerName: {
			allowNull: false,
			type: DataTypes.STRING
		},
		customerPhone: {
			type: DataTypes.STRING
		},
		customerAddress: {
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
		tableName: 'order',
		underscored: true
	}
);

export default Order;
