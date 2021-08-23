const { Pool } = require('pg');
const pool = new Pool( {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: "Call_Charter",
    port: 5432
})

exports.createPlayCall = async (data) => {
    //check input
    //TODO santation check on strings
    let down = (Number.isInteger(data['down']) && data['down'] >=1 && data['down'] <= 4) ? data['down'] : 1;
    let distance = (Number.isInteger(data['distance'])) ? data['distance'] : 10;
    let yardLine = (Number.isInteger(data['yardline'])) ? data['yardline'] : -20;
    let personnel = data['personnel'];
    let shift = data['shift'];
    let formation = data['formation'];
    let form_tag = data['form_tag'];
    let motion = data['motion'];
    let concept = data['concept'];
    let run_protection = data['run_protection'];
    let tag = data['tag'];
    let new_yard_line = data['new_yard_line'];
    let result = data['result'];

    //get team id
    //TODO get team_id from session
    let team_id = 1;
    //TODO add game id as hidden in form
    let game_id = 1;
    //TODO lib for gain funcion
    let gain = 0;
    
    //insert into db
    const text = `INSERT INTO game.plays 
        ( game_id, team_id, personnel, shifts, formations, formation_tags, motions, run_protections, concepts, tags, run_pass, result, gain, down, distance, yard_line, call_time) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, NOW())`;
    const values = [game_id, team_id, personnel, shift, formation, form_tag, motion, run_protection, concept, tag, 'R', result, gain, down, distance, yardLine]
    
    await pool.query(text, values, (err, res) => {
        if(err) {
            console.log(err.stack);
        } else {
            console.log('insert')
            return res;
        }
    })
}