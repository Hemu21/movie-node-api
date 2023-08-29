const movieModel = require("../model/model.js");
async function addmovies(movie){
    const add = new movieModel()
    const date = Date.now()
    add.$set({name:movie.name,description:movie.description,rating:movie.rating,date:date})
    await add.save()
}

module.exports = addmovies