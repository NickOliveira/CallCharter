let calls = require('../models/call_model')

exports.getBreakdownAction = async (req, res, next) => {
    
    data = {
        'calls': await calls.getCallHistory()
    };    
    
    //render front end
    res.render("breakdown", data);
}