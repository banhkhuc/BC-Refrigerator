import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from 'databases';
import Product, { ProductModel } from './Product';
import Facility, { FacilityModel } from './Facility';
import ProductStatus from 'utils/constants/ProductStatus';

export interface OrderModel extends Model<InferAttributes<OrderModel>, InferCreationAttributes<OrderModel>> {
	id: CreationOptional<number>;
	productCode: ForeignKey<ProductModel['code']>;
	distributeId: ForeignKey<FacilityModel['id']>;
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
		productCode: {
			allowNull: false,
			type: DataTypes.STRING
		},
		distributeId: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		orderDate: {
			type: DataTypes.DATE
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

Product.hasOne(Order, {
	sourceKey: 'code',
	foreignKey: 'productCode'
});

Order.belongsTo(Product, {
	targetKey: 'code',
	foreignKey: 'productCode'
});

Facility.hasOne(Order, {
	foreignKey: 'distributeId'
});

Order.belongsTo(Facility, {
	foreignKey: 'distributeId'
});

export default Order;
