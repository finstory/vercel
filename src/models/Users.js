const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
          isUUID: 4,
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      image: {
        type: DataTypes.TEXT,
        defaultValue: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1681399070/shop-mugs/navSvgs/user_p9mbvk.png",
        validate: {
          isUrl: true,
          notEmpty: true,
        },
      },
      userattack: {
        type: DataTypes.STRING,
        defaultValue: "",
        allowNull: true,
        unique: false,
      },
      steamid: {
        type: DataTypes.STRING,
        defaultValue: "",
        allowNull: true,
        unique: false,
      },

      token: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
      },

      type: {
        type: DataTypes.ENUM(["user", "bot", "admin"]),
        defaultValue: "user",
        validate: {
          notEmpty: true,
          isIn: [["user", "bot", "admin"]],
        },
      },

    },
    { timestamps: false }
  );
};
