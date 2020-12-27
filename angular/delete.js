const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = {
    host:"localhost",
    user:"root",
    password:"",
    database:"nodedemo"
}

const Delete = async (input)=>{
    const connection = mysql.createConnection(db_config);

    await connection.connectAsync();
    let sql = "delete from demo1 where id = ?";
    const result = await connection.queryAsync(sql,[input.id]);
    await connection.endAsync();
}

module.exports = {Delete};