// eslint-disable-next-line func-names
// export registration model for use in other files.
module.exports = function (sequelize, DataTypes) {
  const marketPlace_inventory = sequelize.define(
    `marketPlace_inventory`,
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: `id`,
      },
      odometer: {
        type: DataTypes.STRING,
        allowNull: false,
        field: `odometer`,
      },
      major_scarthes: {
        type: DataTypes.STRING,
        allowNull: false,
        field: `major_scarthes`,
      },
      original_paint: {
        type: DataTypes.STRING,
        allowNull: false,
        field: `original_paint`,
      },
      accident_reported: {
        type: DataTypes.INTEGER,
        allowNull: false,
        fiels: `accident_reported`,
      },
      previous_buyers: {
        type: DataTypes.STRING,
        allowNull: false,
        fiels: `previous_buyers`,
      },
      registration_place: {
        type: DataTypes.STRING,
        allowNull: false,
        fiels: `registration_place`,
      },
      car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: `car_id`,
      },
    },
    {
      tableName: `marketPlace_inventory`,
      timestamps: false,
    }
  );
  marketPlace_inventory.associate = (models) => {
    marketPlace_inventory.belongsTo(models.oem_specs, { foreignKey: `car_id` });
  };
  return marketPlace_inventory;
};
