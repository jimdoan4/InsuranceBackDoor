// Receipe Controller
const User = require('../models/User.js')

const userController = {
    index: (req, res) => {
        User.find().then(users => {
            res.render('index', {
                users
            })
        })
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        User.create(req.body).then(user => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId).then(user => {
            res.render('show', {
                user
            })
        })
    },
    edit: (req, res) => {
        User.findById(req.params.userId).then(user => {
            res.render('edit', {
                user
            })
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body, {
            new: true
        }).then(() => {
            res.redirect(`/${req.params.userId}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            console.log(`Deleted Recipe ${req.params.userId}`)
            res.redirect('/')
        })
    }
}

module.exports = userController