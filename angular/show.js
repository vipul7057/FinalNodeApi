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


const showdata = async()=>{
    const connection = mysql.createConnection(db_config);
//connection with database
await connection.connectAsync();
//logic
let sql = "select * from demo1";
const result =  await connection.queryAsync(sql);


//ending the connection
await connection.endAsync();
return result;
}
module.exports = {showdata}