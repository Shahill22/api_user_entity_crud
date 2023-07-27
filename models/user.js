//Defining the sequelize model
//users table in Sqlite dB
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
        type: Sequelize.DATE, // Assuming you only want the date portion of the dob
        allowNull: false,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },{
      paranoid:true,
      tableName : 'users'
    });
    return User;
  };