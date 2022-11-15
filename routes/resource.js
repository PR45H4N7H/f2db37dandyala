
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var garrettCars_controller = require('../controllers/garrettCars'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/garrettCars', garrettCars_controller.garrettCars_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/garrettCars/:id', garrettCars_controller.garrettCars_delete); 
 
// PUT request to update Costume. 
router.put('/garrettCars/:id', garrettCars_controller.garrettCars_update_put); 
 
// GET request for one Costume. 
router.get('/garrettCars/:id', garrettCars_controller.garrettCars_detail); 
 
// GET request for list of all Costume items. 
router.get('/garrettCars', garrettCars_controller.garrettCars_list); 
 
module.exports = router; 


