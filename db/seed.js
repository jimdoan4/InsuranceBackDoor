const mongoose = require("./connection");
const User = require("../models/User.js");
const Course = require("../models/Course.js");
const Professor = require("../models/Professor.js");
const Note = require("../models/Note.js");

const newUsers = ({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    age: Number,
    gender: String,
    password: String,
    posts: String
})

const newCourses = ({
    courseName: String,
    university: String,
    professorName: String,
    term: String,
    description: String,
    links: String
})

const newProfessors = ({
    name: String,
    courseNumber: String,
    descriptionLevel: String,
    rating: Number,
    comments: String
})

const newNotes = ({
    title: String,
    chapter: String,
    description: String,
    hints: String
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

User.create(newUsers).then(user => {
    console.log("Saved user", user)
})

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