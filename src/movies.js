const movieModel = require("../model/model.js");
async function movies(){
    const all = await movieModel.find()
    return all
}

module.exports = movies