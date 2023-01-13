const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("../sql/weather.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);

    console.log("connection successful");
});


const express = require('express');
const app = express();
// const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'password',
//     database: 'demo',
// });

// app.post('/create',(req,res)=>{
//     const name = req.body.name;
//     const age = req.body.age;
//     const country = req.body.country;
//     const position = req.body.position;
//     const wage = req.body.wage;

//     db.query(
//         'INSERT INTO employees(name, age, country, position, wage) VALUES (?,?,?,?,?)',
//         [name, age, country, position, wage], 
//         (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send('Values Inserted');
//             }
//         }
//     );

// });

app.get('/weather', (req,res) => {
    db.all("SELECT * FROM sample1", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () =>{
    console.log("Yey, your server is running on port 3001")
});