// Course Controller
const Course = require('../models/Course.js')

const courseController = {
    index: (req, res) => {
        Course.find().then(courses => {
            res.render('index', {
                courses
            })
        })
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        Course.create(req.body).then(course => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Course.findById(req.params.courseId).then(course => {
            res.render('show', {
                course
            })
        })
    },
    edit: (req, res) => {
        Course.findById(req.params.courseId).then(course => {
            res.render('edit', {
                course
            })
        })
    },
    update: (req, res) => {
        Course.findByIdAndUpdate(req.params.courseId, req.body, {
            new: true
        }).then(() => {
            res.redirect(`/${req.params.courseId}`)
        })
    },
    delete: (req, res) => {
        Course.findByIdAndDelete(req.params.courseId).then(() => {
            console.log(`Deleted Course ${req.params.courseId}`)
            res.redirect('/')
        })
    }
}

module.exports = courseController