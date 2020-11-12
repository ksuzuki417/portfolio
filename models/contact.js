module.exports = function(sequelize, DataTypes) {
    var Contacts = sequelize.define("Contact", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
      }
    });
    return Contacts;
  };