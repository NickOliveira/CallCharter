const playbook = require('../models/playbook_model');


exports.getInputController = (req, res, next) => {
    //get all play book from db    
    data = playbook.getPlaybook();
    //render front end
    res.render("input", data);
}