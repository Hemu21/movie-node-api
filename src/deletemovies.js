const movieModel = require("../model/model.js");

async function deletemovies(id){
    const msg = await movieModel.deleteOne({_id:id})
    return msg
}

module.exports = deletemovies