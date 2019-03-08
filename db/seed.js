const mongoose = require("./connection");
const Course = require("../models/Course.js");
const Professor = require("../models/Professor.js");
const Note = require("../models/Note.js");

const newCourses = ({
    courseName: "Commercial General Liability",
    university: "University of Georgia",
    professorName: "Tom Hawkins",
    term: "Spring 2019",
    description: "Commercial general liability (CGL) is a type of insurance policy that provides coverage to a business for bodily injury, personal injury and property damage caused by the business' operations, products, or injury that occurs on the business' premises."
})

const newProfessors = ({
    name: "Tom Hawkins",
    courseNumber: "Commercial General Liability 4000",
    difficultyLevel: "Easy",
    rating: 4,
    comments: "Make sure to go to class early because he will check attendance first thing in the morning"
})

const newNotes = ({
    title: "Commercial General Liability",
    chapter: "Chapter 3",
    noteDescription: "I will add the notes later",
    hints: "Remember to read the side articles because it will be on the test!"
})


Course.create(newCourses).then(course => {
    console.log("Saved course", course)
})

Professor.create(newProfessors).then(professor => {
    console.log("Saved professor", professor)
})

Note.create(newNotes).then(note => {
    console.log("Saved note", note)
})

