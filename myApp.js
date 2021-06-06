require('dotenv').config();
const mongoose = require("mongoose");
const {Schema} = mongoose;

//Connect to the data base

mongoose.connect(`${process.env.MONGO_URI}`,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  },
  (err, data)=>{
    if(err) console.log(err)
    else console.log("connected to mongodb")
  }
  )

//Create a schema

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String]
  }
})

//Create a model

let Person = mongoose.model("Person", personSchema);

// FCC title Create and Save a Record of a Model

const createAndSavePerson = (done) => {

  const me = new Person({
    name : "Antho",
    age : 28,
    favoriteFoods: ["Chocolate", "Beer", "Oats", "French fries", "Pizza", "Ice cream"]
  })

  me.save((err, data)=>{
    if(err)  return console.log(err)
    done(null , data);
  })



  
};

// Create Many Records with model.create()

const arrayOfPeople = [
  {
    name: "Ash",
    age: 1,
    favoriteFoods: ["Tuna", "Mice", "Biscuit"]
  },
  {
    name: "Diane",
    age: 28,
    favoriteFoods: ["French fries", "Salad", "Chocolate"]
  }
]

const createManyPeople = (arrayOfPeople, done) => {

  Person.create(arrayOfPeople, (err, data)=>{
    if(err) return console.log(err)
    else return done(null , data);
  })
};


// Use model.find() to Search Your Database


const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, data)=>{
    if(err) console.log(err)
    else done(null , data);
  }) 
};

// Use model.findOne() to Return a Single Matching Document from Your Database



const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data)=>{
    if(err) console.log(err);
    else done(null , data);
  }) 
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
