const path = require('path');
const rootDir = require('../util/path');

exports.getSuccess = (req, res, next) => {
    res.send(`<h1>Form successfuly filled</h1>`)
}