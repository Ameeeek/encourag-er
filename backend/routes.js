const akses = require("express").Router();
const QuoteModel = require("./model.js");

akses.route("/").get((req,res) =>{
    QuoteModel.find()
    .then((quotes) => res.status(200).json(quotes))
    .catch((error) => res.status(400).json(error.message));
});
akses.route("/add").post((req, res)=>{
    QuoteModel.find()
    .then((createdQuote) => res.status(200).json(createdQuote))
    .catch((error) => res.status(400).json(error.message));
})
module.exports = akses;