const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();

const __VIEW_DIR = "./private_dir/src/";

const input_bootstrap = require("./private_dir/src/cc_input/bootstrap");
//const breakdown_bootstrap = require("./private_dir/src/cc_breakdown/bootstrap");

app.use(express.json())

app.set('view engine', 'pug');
app.set('views', [__VIEW_DIR + "cc_input/views", __VIEW_DIR + "cc_breakdown/views"])

const router = express.Router();
app.use(router);

console.log("LOADING: Bootstrapping Input to router.");
input_bootstrap(app, router);

console.log("LOADING: Bootstrapping Breakdown to router.");
//breakdown_bootstrap(app, router);

console.log("LOADING: Serving Public_html.");
app.use(express.static('public_html'));


app.listen(PORT, (err) => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Call Charter app listening at http://localhost:${PORT}`)
    console.log("Configs " + process.env.DB_HOST)
})

