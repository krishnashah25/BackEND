const app = require("./src/app")
require("dotenv").config()
const ConnectDB = require("./src/db/db")

ConnectDB()

app.listen(3000, ()=> {
    console.log("Server is running on part 3000...")
})