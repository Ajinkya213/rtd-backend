const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize to use MySQL
const sequelize = new Sequelize('rtdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define the Data model
const Data = sequelize.define('Data', {
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    speed: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Synchronize the models with the database
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((error) => {
        console.error('Unable to create database & tables:', error);
    });

module.exports = {
    sequelize,
    Data
};
