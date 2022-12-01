const mongoose = require("mongoose") 
const garrettCarsSchema = mongoose.Schema({ 
 carName: String, 
 carModel: String, 
 cost:Number
 
}) 
 
module.exports = mongoose.model("garrettCars", 
garrettCarsSchema) 