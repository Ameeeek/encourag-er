const express = require('express'); //deklarasi express
const morgan = require('morgan');// deklarasi Morgan
const cors = require('cors'); // deklarasi cors
const routeAkses = require('./routes.js')
require("./db.js"); //mengambil db.js

const app = express(); //deklarasi express app
const port = 4000; // deklerasi port

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/quote", routeAkses)
app.listen(port, () =>{
    console.log("server telah berhasil dijalankan pada port: " + port )
});