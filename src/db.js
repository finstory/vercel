const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const DB_NAME = "sql10615644";
const DB_USER = "sql10615644";
const DB_PASSWORD = "MxuQHsmdN2";
const DB_HOST = "sql10.freemysqlhosting.net";
const tedious = require('tedious')
// let sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
// 	host: DB_HOST
// 	, dialect: "mysql"
// 	, logging: true // *DEUBUG
// });


// const mysql = require('mysql');


// const connection = mysql.createConnection({
// 	host:DB_HOST,
// 	user: DB_USER,
// 	password: DB_PASSWORD,
// 	database: DB_NAME
// });

// const sequelize = new Sequelize({
// 	dialect: 'mysql',
// 	dialectModule: mysql,
// 	dialectOptions: {
// 	  connection
// 	}
//   });

// let sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
// 	host: DB_HOST,
// 	port: 3306,
// 	dialect: "mysql",
// 	dialectModule: mysql,
// 	dialectOptions: {
// 		connection
// 	},
// 	logging: true // *DEUBUG	
// });

// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
// 	.filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
// 	.forEach((file) => {
// 		modelDefiners.push(require(path.join(__dirname, '/models', file)));
// 	});

// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach(model => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);






// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { User, Bot } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);


// Product.belongsToMany(Order, { through: 'product_order', timestamps: false, });
// Order.belongsToMany(Product, { through: 'product_order', timestamps: false, });

// Cart.belongsToMany(Product, { through: ProductCart });
// Product.belongsToMany(Cart, { through: ProductCart });
// User.hasMany(Cart);
// Cart.belongsTo(User);

// Product.hasMany(Comment);
// Comment.belongsTo(Product);

// User.hasMany(Comment);
// Comment.belongsTo(User);


module.exports = {
	// ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: "sequelize",     // para importart la conexión { conn } = require('./db.js');
};
