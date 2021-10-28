const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema (
    {
        by: {type:String, required: true},
        quote: {type:String, required: true} 
    },
    { collection: "koleksiQuote"}
);

module.exports = mongoose.model("QuoteModel", bookSchema);