breakdown_route = require("../cc_breakdown/routes");

module.exports = (app, router) => {
  breakdown_route.appRoute(router);    
};