import express from "express"
import mysql from "mysql"
import cors from "cors"

const app= express()

app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Angeloska1#2#",
    database: "employeesystem"
});

app.post('/create', (req, res)=> {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employees (name, age, country, position, wage) VALUES(?, ?, ?, ?, ?)',
     [name, age, country, position, wage], (err, result) => {
        if(err){
            console.log(err)
        }else {
            res.send("values inserted")
        }
     }
     );
});

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if(err) {
            console.log(err)
        }else {
           res.send(result)
        }
})
})

app.listen(3001, ()=> {
    console.log("server running on port 3001");
});
