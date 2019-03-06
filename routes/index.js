// Routes
const express = require('express')
const router = express.Router()
// const userController = require('../controllers/userController.js')
const appController = require('../controllers/appController.js')
const courseController = require('../controllers/courseController.js')
const professorController = require('../controllers/professorController.js')
const noteController = require('../controllers/noteController.js')

// App Routes
router.get('/', appController.index)

//Course Routes
router.get('/courses', courseController.index)

router.get('/new', courseController.new)

router.post('/courses', courseController.create)

router.get('/courses/:courseId', courseController.show)

router.get('/courses/:courseId/edit', courseController.edit)

router.put('/courses/:courseId', courseController.update)

router.delete('/courses/:courseId', courseController.delete)

//Professor Routes
router.get('/professors', professorController.index)

router.get('/professors/new', professorController.new)

router.post('/professors', professorController.create)

router.get('/professors/:professorId', professorController.show)

router.get('/professors/:professorId/edit', professorController.edit)

router.put('/professors/:professorId', professorController.update)

router.delete('/professors/:professorId', professorController.delete)

// //Note Routes
router.get('/notes', noteController.index)

router.get('/notes/new', noteController.new)

router.post('/notes', noteController.create)

router.get('/notes/:noteId', noteController.show)

router.get('/notes/:noteId/edit', noteController.edit)

router.put('/notes/:noteId', noteController.update)

router.delete('/notes/:noteId', noteController.delete)


module.exports = router;

// User Routes
// router.get('/', userController.index)

// router.get('/new', userController.new)

// router.post('/', userController.create)

// router.get('/:recipeId', userController.show)

// router.get('/:recipeId/edit', userController.edit)

// router.put('/:recipeId', userController.update)

// router.delete('/:recipeId', userController.delete)