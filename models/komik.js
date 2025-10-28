module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      judul: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  }