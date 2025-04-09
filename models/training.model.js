const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/connectDB');

const Training = sequelize.define('Training', {
    Efficiency: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'training',
    timestamps: false,
});

module.exports = Training;
