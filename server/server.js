const dotenv = require('dotenv')
const express = require('express'); //deklarasi express
const morgan = require('morgan');// deklarasi Morgan
const cors = require('cors'); // deklarasi cors
const mongoose = require('mongoose'); // deklarasi penggunaan mongoose
const routeAkses = require('./routes')
dotenv.config()
// const CONNECTION_URL = 'mongodb+srv://Amek:Meliodas00012@cluster0.rjp8w.mongodb.net/test'
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, {})//useNewUrlParser: true, useUnifiedTopology:true})
    // .then(() => app.listen(PORT, () =>(`server telah berjalan di: ${PORT}`)))
    // .catch((error) => console.log(error.message))
// mongoose.connection.on("error", console.error.bind(console,"koneksi ke database gagal.."))
// mongoose.connection.once("open",()=>{
//     console.log('koneksi ke database berhasil')
// })

const app = express(); //deklarasi express app
app.get('/', (req,res) =>{
    res.send('hello ')
})
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/quote", routeAkses)
app.listen(PORT, () =>{
    console.log("server telah berhasil dijalankan pada port: " + PORT )
});