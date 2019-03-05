// const Post = require('../models/Note.js')

// const postController = {
//     index: (req, res) => {
//         Post.find().then(posts => {
//             res.render('index', {
//                 posts
//             })
//         })
//     },
//     new: (req, res) => {
//         res.render('new')
//     },
//     create: (req, res) => {
//         Post.create(req.body).then(post => {
//             res.redirect('/')
//         })
//     },
//     show: (req, res) => {
//         Post.findById(req.params.postId).then(post => {
//             res.render('show', {
//                 post
//             })
//         })
//     },
//     edit: (req, res) => {
//         Post.findById(req.params.postId).then(post => {
//             res.render('edit', {
//                 post
//             })
//         })
//     },
//     update: (req, res) => {
//         Post.findByIdAndUpdate(req.params.postId, req.body, {
//             new: true
//         }).then(() => {
//             res.redirect(`/${req.params.postId}`)
//         })
//     },
//     delete: (req, res) => {
//         Post.findByIdAndDelete(req.params.postId).then(() => {
//             console.log(`Deleted Recipe ${req.params.postId}`)
//             res.redirect('/')
//         })
//     }
// }

// module.exports = postController