import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from 'databases';

export interface ProductModel extends Model<InferAttributes<ProductModel>, InferCreationAttributes<ProductModel>> {
	id: CreationOptional<number>;
	id_products_lines: number;
	id_produce: number;
	mfg: CreationOptional<Date>;
	id_distribute: number;
	import_date_distribute: CreationOptional<Date>;
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
		id_products_lines: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		id_produce: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		mfg: {
			allowNull: false,
			type: DataTypes.DATE
		},
		id_distribute: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
		import_date_distribute: {
			allowNull: true,
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

export default Product;
