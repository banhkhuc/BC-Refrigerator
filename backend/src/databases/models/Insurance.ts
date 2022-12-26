import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from 'databases';
import Product from './Product';
import Facility from './Facility';

export interface InsuranceModel
	extends Model<InferAttributes<InsuranceModel>, InferCreationAttributes<InsuranceModel>> {
	id: CreationOptional<number>;
	error: string;
	guaranteeStatus: string;
	createdAt: CreationOptional<Date>;
	updatedAt: CreationOptional<Date>;
}

const Insurance = sequelize.define<InsuranceModel>(
	'Insurance',
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		error: {
			type: DataTypes.STRING
		},
		guaranteeStatus: {
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
		tableName: 'insurance',
		underscored: true
	}
);

Product.hasMany(Insurance);
Insurance.belongsTo(Product);

Facility.hasMany(Insurance, {
	foreignKey: 'distributeId'
});

Facility.hasMany(Insurance, {
	foreignKey: 'guaranteeId'
});

export default Insurance;
