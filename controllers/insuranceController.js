// const Insurance = require('../models/Insurance.js')
// const insuranceController = {
//     index: (req, res) => {
//         Insurance.find().then(Insurances => {
//             console.log(Insurance)
//             res.render('Insurances/index', {
//                 Insurances
//             })
//         })
//     }
// }
// const insuranceController = {
//     index: (req, res) => {
//         res.render('insurances/index')
//     }
// }

//     new: (req, res) => {
//         res.render('notes/new')
//     },
//     create: (req, res) => {
//         Note.create(req.body).then(note => {
//             res.redirect('/')
//         })
//     },
//     show: (req, res) => {
//         Note.findById(req.params.noteId).then(note => {
//             res.render('notes/show', {
//                 note
//             })
//         })
//     },
//     edit: (req, res) => {
//         Note.findById(req.params.noteId).then(note => {
//             res.render('notes/edit', {
//                 note
//             })
//         })
//     },
//     update: (req, res) => {
//         Note.findByIdAndUpdate(req.params.noteId, req.body, {
//             new: true
//         }).then(() => {
//             res.redirect(`/${req.params.noteId}`)
//         })
//     },
//     delete: (req, res) => {
//         Note.findByIdAndDelete(req.params.noteId).then(() => {
//             console.log(`Deleted Note ${req.params.noteId}`)
//             res.redirect('/')
//         })
//     }
// }

// module.exports = insuranceController;