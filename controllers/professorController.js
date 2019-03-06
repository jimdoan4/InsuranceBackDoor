// Professor Controller
// const Professor = require('../models/Professor.js')

// const professorController = {
//     index: (req, res) => {
//         Professor.find().then(professors => {
//             res.render('index', {
//                 professors
//             })
//         })
//     },
//     new: (req, res) => {
//         res.render('new')
//     },
//     create: (req, res) => {
//         Professor.create(req.body).then(professor => {
//             res.redirect('/')
//         })
//     },
//     show: (req, res) => {
//         Professor.findById(req.params.professor.Id).then(professor => {
//             res.render('show', {
//                 professor
//             })
//         })
//     },
//     edit: (req, res) => {
//         Professor.findById(req.params.professor.d).then(professor => {
//             res.render('edit', {
//                 professor
//             })
//         })
//     },
//     update: (req, res) => {
//         Professor.findByIdAndUpdate(req.params.professorId, req.body, {
//             new: true
//         }).then(() => {
//             res.redirect(`/${req.params.professorId}`)
//         })
//     },
//     delete: (req, res) => {
//         Professor.findByIdAndDelete(req.params.professorId).then(() => {
//             console.log(`Deleted Professor ${req.params.professorId}`)
//             res.redirect('/')
//         })
//     }
// }

// module.exports = professorController