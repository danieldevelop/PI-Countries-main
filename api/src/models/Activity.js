const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        // ID, no se especifica formato (Obligatorio)
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // Nombre (Obligatorio)
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Dificultad, número del 1 al 5 (Obligatorio)
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
                isEven(value) {
                    if (value < 1 || value > 5) { // aqui el return no es necesario
                        throw new Error("Difficulty must be between 1 and 5");
                    }
                }
            }
        },

        // Duración, en horas (NO Obligatorio)
        duration: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 24,
                isEven(value) {
                    if (value < 1 || value > 24) { // aqui el return no es necesario
                        throw new Error("The duration should be between 1 and 24 hrs.");
                    }
                }
            }
        },

        // Temporada => Verano, Otoño, Invierno o Primavera (Obligatorio)
        season: {
            type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};