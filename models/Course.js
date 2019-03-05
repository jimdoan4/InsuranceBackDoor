// Category Model
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    courseName: String,
    university: String,
    professorName: String,
    term: String,
    description: String,
    links: String
})

module.exports = mongoose.model('Course', CourseSchema)