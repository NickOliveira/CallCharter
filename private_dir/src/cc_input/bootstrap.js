input_route = require("../cc_input/routes");

module.exports = async (app, router) => {    
  await input_route.appRoute(router);    
};