module.exports = (sequelize, DataTypes) => {
    const video = sequelize.define("many", {
      
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.DataTypes.BLOB("long"),
      },
    });
    return video
}; 