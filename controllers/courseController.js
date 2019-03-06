// Course Controller
const Course = require('../models/Course.js')

const courseController = {
    index: (req, res) => {
        //      res.send(`Hi, Jim`)
        Course.find().then(courses => {
            res.render('courses/index', {
                courses
                // res.redirect('/views/educ.html')
            })
        })
    },
    new: (req, res) => {
        // res.send(`Hi, John`)
        res.render('courses/new')
    },
    create: (req, res) => {
        // res.send(`Hi, John`)
        Course.create(req.body).then(course => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Course.findById(req.params.courseId).then(course => {
            res.render('courses/show', {
                course
            })
        })
    },
    edit: (req, res) => {
        Course.findById(req.params.courseId).then(course => {
            res.render('courses/edit', {
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