// const Note = require('../models/Note.js')

// const noteController = {
//     index: (req, res) => {
//         Note.find().then(notes => {
//             res.render('index', {
//                 notes
//             })
//         })
//     },
//     new: (req, res) => {
//         res.render('new')
//     },
//     create: (req, res) => {
//         Note.create(req.body).then(note => {
//             res.redirect('/')
//         })
//     },
//     show: (req, res) => {
//         Note.findById(req.params.noteId).then(note => {
//             res.render('show', {
//                 note
//             })
//         })
//     },
//     edit: (req, res) => {
//         Note.findById(req.params.noteId).then(note => {
//             res.render('edit', {
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

// module.exports = noteController