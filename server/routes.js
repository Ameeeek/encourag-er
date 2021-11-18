const akses = require("express").Router();
const Quote = require("./model");

akses.route("/").get((req,res) =>{
    Quote.find()
    .then((quotes) => res.status(200).json(quotes))
    .catch((error) => res.status(400).json(error.message));
});
akses.route("/add").post((req, res)=>{
    Quote.create(req.body)
    .then((createdQuote) => res.status(200).json(createdQuote))
    .catch((error) => res.status(400).json(error.message));
})
module.exports = akses;