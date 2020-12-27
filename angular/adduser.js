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

let adduser = async (input) => {
    const connection = mysql.createConnection(db_config);
  
    await connection.connectAsync();
  
    const sql =
      "INSERT INTO demo1 (id,USERNAME, PASSWORD) VALUES (?, ?, ?)";
    const result = await connection.queryAsync(sql, [
        input.id,
      input.username,
      input.password,
    ]);
  
     await connection.endAsync();
  
    return result;
  };

module.exports = {adduser,db_config};