const mongoose = require("./connection");
// const User = require("../models/User.js");
const Course = require("../models/Course.js");
const Professor = require("../models/Professor.js");
const Note = require("../models/Note.js");

// const newUsers = ({
//     firstName: String,
//     lastName: String,
//     userName: String,
//     email: String,
//     age: Number,
//     gender: String,
//     password: String,
//     posts: String
// })

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

// Professor.create(newProfessors).then(professor => {
//     console.log("Saved professor", professor)
// })

// Note.create(newNotes).then(note => {
//     console.log("Saved note", note)
// })

// User.create(newUsers).then(user => {
//     console.log("Saved user", user)
// })

// const newUsers = [{
//         name: "Apple Pie by Grandma Ople",
//         ingredients: ["1/2 cup white sugar", "1/2 cup packed brown sugar"],
//         cookingTime: "1 hour 30 minutes",
//         description: "This was my grandmother's apple pie recipe. I have never seen another one quite like it. It will always be my favorite and has won me several first place prizes in local competitions. I hope it becomes one of your favorites as well",
//         recipeImg: "https://images.media-allrecipes.com/userphotos/720x405/736203.jpg",
//         directions: ["Preheat oven to 425 degrees F (220 degrees C). Melt the butter in a saucepan. Stir in flour to form a paste. Add water, white sugar and brown sugar, and bring to a boil. Reduce temperature and let simmer."]
//     },
//     {
//         name: "No-Bake Lemon-Mango Cheesecakes with Speculoos crust",
//         ingredients: ["Mango", "Cookies"],
//         cookingTime: "35 minutes",
//         description: "Perfect for times when you just don’t want to use your oven. Cheesecake sitting on a cookie. What could be better than that? Combining the tart flavors of lemon and mango adds a hint of the exotic to this rich dessert.",
//         recipeImg: "https://lh5.ggpht.com/PgU8Bqq-c_SYCOfUHqw3a27ndzcmRdYyFXs-KjNSWHOHgzUkhI9ioAMbPNoV0Yf_g-W64eo2Jq1GIptcGyMNLes=s640-c-rw-v1-e365",
//         directions: ["Using a blender, smash the cookies into pieces, add the diced butter and mix, pulsing to incorporate."]
//     }
// ]