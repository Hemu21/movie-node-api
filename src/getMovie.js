const movieModel = require("../model/model.js");

async function getMovie(id){
   const movie = await movieModel.findById(id)
   return movie
}

module.exports = getMovie