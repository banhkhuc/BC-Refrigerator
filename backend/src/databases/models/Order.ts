import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from 'databases';
import Product from './Product';

export interface OrderModel extends Model<InferAttributes<OrderModel>, InferCreationAttributes<OrderModel>> {
	id: CreationOptional<number>;
	orderName: string;
	orderPhone: string;
	orderAddress: string;
	orderDate: Date;
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
		orderName: {
			allowNull: false,
			type: DataTypes.STRING
		},
		orderPhone: {
			type: DataTypes.STRING
		},
		orderAddress: {
			type: DataTypes.STRING
		},
		orderDate: {
			allowNull: false,
			type: DataTypes.DATE
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

Product.hasOne(Order);
Order.belongsTo(Product);

export default Order;
