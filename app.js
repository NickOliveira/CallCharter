const express = require('express')
const app = express()
const path = require("path");
const PORT = 3000

require('dotenv').config();
const cc_input = require("./private_dir/src/cc_input/routes/index");
const __VIEW_DIR = "./private_dir/src/";

const input_bootstrap = require("./private_dir/src/cc_input/bootstrap");


app.set('view engine', 'pug');
app.set('views', [__VIEW_DIR + "/cc_input/views"])

const router = express.Router();
app.use(router);

console.log("LOADING: Bootstrapping Input to router.");
input_bootstrap(app, router);

console.log("LOADING: Serving Public_html.");
const publicDir = path.resolve("./public_html");
app.use(express.static('public_html'));


app.listen(PORT, (err) => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Call Charter app listening at http://localhost:${PORT}`)
})

