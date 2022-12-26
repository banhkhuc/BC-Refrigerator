import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from 'databases';
import ProductLine from './ProductLine';
import Facility from './Facility';

export interface ProductModel extends Model<InferAttributes<ProductModel>, InferCreationAttributes<ProductModel>> {
	id: CreationOptional<number>;
	mfg: CreationOptional<Date>;
	distributeDate: CreationOptional<Date>;
	sold: boolean;
	createdAt: CreationOptional<Date>;
	updatedAt: CreationOptional<Date>;
}

const Product = sequelize.define<ProductModel>(
	'Product',
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		mfg: {
			allowNull: false,
			type: DataTypes.DATE
		},
		distributeDate: {
			type: DataTypes.DATE
		},
		sold: {
			allowNull: false,
			defaultValue: false,
			type: DataTypes.BOOLEAN
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		}
	},
	{
		tableName: 'product',
		underscored: true
	}
);

ProductLine.hasMany(Product);
Product.belongsTo(ProductLine);

Facility.hasMany(Product, {
	foreignKey: 'produceId'
});

Facility.hasMany(Product, {
	foreignKey: 'distributeId'
});

export default Product;
