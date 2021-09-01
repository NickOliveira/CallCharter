breakdownController = require("../controllers/indexController");

exports.appRoute = (router) => {   
    router.get('/breakdown', breakdownController.getBreakdownAction);    
}