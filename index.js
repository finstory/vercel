//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

async function connectToDatabase() {
    console.log('Trying to connect via sequelize')
    await conn.sync()
    await conn.authenticate()
    console.log('=> Created a new connection.')

    conn.sync({ force: false }).then(() => {
        server.listen(3001, () => {
            console.log('%s listening at 3001'); // eslint-disable-line no-console
        });
    });
}

connectToDatabase();
// Syncing all the models at once.


// server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
// });
