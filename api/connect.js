import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"your_current_password",
  database:"social"
})