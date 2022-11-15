var express = require('express'); 
const garrettCars_controlers= require('../controllers/garrettCars'); 
 //const garrettCars_controller=require('../controllers/garrettCars');
var router = express.Router(); 

 
/* GET garrettCarss */ 
router.get('/', garrettCars_controlers.garrettCars_view_all_Page ); 
router.get('/garrettCars/:id', garrettCars_controlers.garrettCars_detail);

router.put('/garrettCars/:id', garrettCars_controlers.garrettCars_update_put);
/* GET detail garrettCars page */ 
router.get('/detail', garrettCars_controlers.garrettCars_view_one_Page); 
/* GET create garrettCars page */ 
router.get('/create', function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('garrettCarscreate', { title: 'garrettCars Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}); 
/* GET create update page */ 
router.get('/update', garrettCars_controlers.garrettCars_update_Page);
router.get('/delete', garrettCars_controlers.garrettCars_delete_Page); 
module.exports = router; 