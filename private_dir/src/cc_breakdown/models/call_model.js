const { Pool } = require('pg');

const pool = new Pool( {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: "Call_Charter",
    port: 5432
});

exports.getCallHistory = async () => {
    //grad game Id
    let game_id = 1;
    //grad team id
    let team_id = 1;
    
    //select all
    const text = `SELECT * FROM game.plays 
        WHERE game_id = $1 AND team_id = $2`;
    let values = [game_id, team_id];
    
    let response = await(pool.query(text, values));
    
    //return result
    return response.rows;
}