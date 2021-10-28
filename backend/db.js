const mongoose = require('mongoose'); // deklarasi penggunaan mongoose

mongoose.connect("mongodb://localhost:27017/db_quote",{ //koneksi menuju mongoDB dengan database db_quote
});

const db = mongoose.connection; // menghubungkan MongoDB
db.on("error", console.error.bind(console, "koneksi ke database gagal.."));

db.once("open", () =>{
    console.log("koneksi ke database berhasil!")
})