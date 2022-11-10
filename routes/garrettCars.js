var express = require('express'); 
const garrettCars_controlers= require('../controllers/garrettCars'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', garrettCars_controlers.garrettCars_view_all_Page ); 
module.exports = router; 