const movieModel = require("../model/model.js");
async function updatemovies(id,body){
    await movieModel.findByIdAndUpdate(id,body)
    return {"message":"updated successfully"}
}

module.exports = updatemovies