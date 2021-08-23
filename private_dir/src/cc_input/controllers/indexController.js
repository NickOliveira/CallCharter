const playbook = require('../models/playbook_model');
const plays = require('../models/play_model');

exports.getInputController = (req, res, next) => {
    //get all play book from db    
    data = playbook.getPlaybook();
    //render front end
    res.render("input", data);
}

exports.inputPlayCallAction = async (req, res, next) => {
    let data = req.body;
    result = await plays.createPlayCall(data);
    console.log(result)
    //TODO Update return type
    res.send('success');
}