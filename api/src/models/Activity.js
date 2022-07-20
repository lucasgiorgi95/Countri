const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('activity',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          name: {
              type: DataTypes.STRING,
          },
          description: {
              type: DataTypes.STRING,
          },
          difficulty: {
              type: DataTypes.ENUM('1', '2', '3', '4', '5'),
          },
          duration: {
              type: DataTypes.STRING,
          },
          season: {
              type: DataTypes.ENUM('winter', 'summer', 'spring', 'autumn')
          },
    })
}