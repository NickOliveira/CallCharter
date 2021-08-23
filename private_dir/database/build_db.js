require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const { exit } = require('process');


const pool = new Pool( {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: "Call_Charter",
    port: 5432
})
console.log("Connected to " + process.env.DB_HOST);


const build_order = [
    "./build/team.sql",
    "./build/game.sql",
    "./build/playbook.sql"
];
async function main() {
    
    for(let i = 0; i < build_order.length; i++) {
        var fileContents = fs.readFileSync(build_order[i]).toString();
        console.log("Running SQL: " + build_order[i]);
        let var1 = await(pool.query(fileContents));
        console.log("complete...")
    } 
    console.log("success! exiting")    
}

main()




//client.query(fileContents, (err, res) => {
//    console.log(err, res)    
//});


