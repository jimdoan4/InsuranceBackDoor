//Routes
const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController.js')
const courseController = require('../controllers/courseController.js')
const professorController = require('../controllers/professorController.js')
const noteController = require('../controllers/noteController.js')
const insuranceController = require('../controllers/insuranceController.js')
const certificationController = require('../controllers/certificationController.js')
const collegeController = require('../controllers/collegeController.js')
const newController = require('../controllers/newController.js')
const communityController = require('../controllers/communityController.js')

//Insurance Routes
router.get('/insurances', insuranceController.index)

//Certification Routes
router.get('/certifications', certificationController.index)

//News Routes
router.get('/news', newController.index)

//College Routes
router.get('/colleges', collegeController.index)

//Community Routes
router.get('/communities', communityController.index)

//App Routes
router.get('/', appController.index)

//Professor Routes
router.get('/professors', professorController.index)

router.get('/professors/new', professorController.new)

router.post('/professors', professorController.create)

router.get('/professors/:professorId', professorController.show)

router.get('/professors/:professorId/edit', professorController.edit)

router.put('/professors/:professorId', professorController.update)

router.delete('/professors/:professorId', professorController.delete)

//Note Routes
router.get('/notes', noteController.index)

router.get('/notes/new', noteController.new)

router.post('/notes', noteController.create)

router.get('/notes/:noteId', noteController.show)

router.get('/notes/:noteId/edit', noteController.edit)

router.put('/notes/:noteId', noteController.update)

router.delete('/notes/:noteId', noteController.delete)

//Course Routes
router.get('/courses', courseController.index)

router.get('/new', courseController.new)

router.post('/courses', courseController.create)

router.get('/:courseId', courseController.show)

router.get('/:courseId/edit', courseController.edit)

router.put('/:courseId', courseController.update)

router.delete('/:courseId', courseController.delete)


module.exports = router;