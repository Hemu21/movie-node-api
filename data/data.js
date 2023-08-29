const mongoose = require("mongoose");
const dot = require("dotenv")
const path = require("path")

dot.config(path.join(__dirname,"../.env"))
user = process.env.USER
password = process.env.PASSWORD
mongoose.connect(`mongodb+srv://${user}:${password}@movie.kzbq9yf.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log()).catch((err)=>console.log(err))
const schema = mongoose.Schema
const movie = new schema({
  name:String,
  description:String,
  rating:Number,
  date:Date
})

module.exports = movie