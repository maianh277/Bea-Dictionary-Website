// get the client
import mysql from "mysql2/promise";
// create the pool to database
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "dictionary",
});

export default pool;
