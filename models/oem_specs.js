// eslint-disable-next-line func-names
// export registration model for use in other files.
module.exports = function (sequelize, DataTypes) {
  const oem_specs = sequelize.define(
    `oem_specs`,
    {
      car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: `car_id`,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        field: `model`,
      },
      model_year: {
        type: DataTypes.STRING,
        allowNull: false,
        field: `model_year`,
      },
      vechicle_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: `vechicle_price`,
      },
      accident_reported: {
        type: DataTypes.INTEGER,
        allowNull: false,
        fiels: `accident_reported`,
      },
      available_color: {
        type: DataTypes.STRING,
        allowNull: false,
        fiels: `available_color`,
      },
      mileage: {
        type: DataTypes.STRING,
        allowNull: false,
        fiels: `mileage`,
      },
      power: {
        type: DataTypes.INTEGER,
        allowNull: false,
        fiels: `power`,
      },
      max_speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        fiels: `max_speed`,
      },
    },
    {
      tableName: `oem_specs`,
      timestamps: false,
    }
  );
  // oem_specs.associate = (models) => {
  //   oem_specs.belongsTo(models.marketPlace_inventory, { foreignKey: `car_id` });
  // };
  return oem_specs;
};
