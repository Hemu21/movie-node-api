const movie = require("../data/data.js");
const model = require("mongoose").model;

const movieModel = model("movie",movie)

module.exports = movieModel