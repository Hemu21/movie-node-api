// importing
const dot = require("dotenv");
const express = require("express");
const path = require("path");
const movies = require("./src/movies.js");
const addmovies = require("./src/addmovies.js");
const getMovie = require("./src/getMovie.js");
const deletemovies = require("./src/deletemovies.js");
const updatemovies = require("./src/updatemovies.js");
// express instance
const app = express();
// configurations 
dot.config(path.join(__dirname,".env"))
const PORT = process.env.PORT
const router = express.Router()

// middlewares
app.use(express.json())
app.use("/api/v1/movies",router)

//routes
router.get("/",(req,res)=>{
    movies().then((all)=>{res.send(all)}).catch((err)=>console.log(err))
})

router.post("/",(req,res)=>{
    addmovies(req.body).then(()=>res.send({"message":"new movie is added"})).catch((err)=>console.log(err,"error....................."))
})

router.get("/:id",(req,res)=>{
    getMovie(req.params.id).then((data)=>res.send(data)).catch((err)=>console.log(err))
})

router.put("/:id",(req,res)=>{
    updatemovies(req.params.id,req.body).then((msg)=>res.send(msg)).catch((err)=>console.log(err))
})

router.delete("/:id",(req,res)=>{
    deletemovies(req.params.id).then((msg)=>res.send(msg)).catch((err)=>console.log(err))
})

app.listen(PORT)