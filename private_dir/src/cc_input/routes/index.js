inputController = require("../controllers/indexController");

exports.appRoute = router => {
    router.get('/input', inputController.getInputController);
}