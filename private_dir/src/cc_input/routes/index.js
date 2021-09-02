inputController = require("../controllers/indexController");

exports.appRoute = (router) => {    
    router.get('/input', inputController.getInputAction);
    router.post('/input/inputPlayCall', inputController.inputPlayCallAction);
    
}
