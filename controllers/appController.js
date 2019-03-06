// const App = require('../models/App.js');
// const {
//     Course
// } = require("../models/Course")

const appController = {
    index: (req, res) => {
        res.render('index')
    }
}

module.exports = appController;