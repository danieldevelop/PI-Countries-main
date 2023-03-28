const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    // ID (Código de tres letras), (Obligatorio)
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },

    // Nombre (Obligatorio)
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Imagen de la bandera (Obligatorio)
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Continente (obligatorio)
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Capital (Obligatorio)
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Subregión (NO Obligatorio)
    subregion: {
      type: DataTypes.STRING,
    },

    // Área (NO Obligatorio)
    area: {
      type: DataTypes.INTEGER,
    },

    // Población (OBLIGATORIO)
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
  });
};
