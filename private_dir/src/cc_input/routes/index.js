inputController = require("../controllers/indexController");

exports.appRoute = router => {
    router.get('/input', inputController.getInputController);
    router.post('/input/inputPlayCall', inputController.inputPlayCallAction);
}
