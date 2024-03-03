const { response } = require("express")
const {Pool} = require("pg")

const pool = new Pool({
      user: "postgres",
      password: "tejas",
      host: "localhost",
      port: 5432,
      database:"yt_newapp"
});






module.exports = pool;
