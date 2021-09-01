const playbook = require('../models/playbook_model');
const plays = require('../models/play_model');

exports.getInputAction = (req, res, next) => {
    //get all play book from db    
    data = playbook.getPlaybook();
    //render front end
    res.render("input", data);
}

exports.inputPlayCallAction = async (req, res, next) => {
    let data = req.body;
    result = await(plays.createPlayCall(data));  
    console.log(result);    
    res.json(result);
}