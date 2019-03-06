// Routes
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const appController = require('../controllers/appController.js')
const courseController = require('../controllers/courseController.js')
const professorController = require('../controllers/professorController.js')
const noteController = require('../controllers/noteController.js')

// User Routes
// router.get('/', userController.index)

// router.get('/new', userController.new)

// router.post('/', userController.create)

// router.get('/:recipeId', userController.show)

// router.get('/:recipeId/edit', userController.edit)

// router.put('/:recipeId', userController.update)

// router.delete('/:recipeId', userController.delete)

// App Routes
router.get('/', appController.index)
// router.get('/views/educ.html', courseController.index)

//Course Routes
router.get('/courses', courseController.index)

router.get('/new', courseController.new)

router.post('/courses', courseController.create)

router.get('/:courseId', courseController.show)

router.get('/:courseId/edit', courseController.edit)

router.put('/:courseId', courseController.update)

router.delete('/:courseId', courseController.delete)

//Professor Routes
// router.get('/courses', professorController.index)

// router.get('/professors/new', professorController.new)

// router.post('/professors', professorController.create)

// router.get('/:professorId', professorController.show)

// router.get('/:professorId/edit', professorController.edit)

// router.put('/:professorId', professorController.update)

// router.delete('/:professorId', professorController.delete)


// //Note Routes
// router.get('/', noteController.index)

// router.get('/new', noteController.new)

// router.post('/', noteController.create)

// router.get('/:noteId', noteController.show)

// router.get('/:noteId/edit', noteController.edit)

// router.put('/:noteId', noteController.update)

// router.delete('/:noteId', noteController.delete)

module.exports = router