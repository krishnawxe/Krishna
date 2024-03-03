const express = require("express")
const cors = require("cors")
const pool = require("./db")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/adduser", (req,res) => {
const username = req.body["username"]
const password = req.body["password"]
console.log("Username:" + username)
console.log("Password:" + password)
const insertSTMT = `INSERT INTO accounts ( username,password ) VALUES ('${username}','${password}');`
pool.query(insertSTMT).then((response) => {
  console.log("Data saved")
  console.log(response)
})
.catch((err) => {
   console.log(err)
})
console.log(req.body)
res.send("Response Recieved" + req.body)
})

app.listen(3000, () => console.log("Server on loclhost: 3000"))
