var garrettCars = require('../models/garrettCars'); 
 
// List of all Costumes 
// List of all Costumes 
exports.garrettCars_list = async function(req, res) { 
    try{ 
        thegarrettCars = await garrettCars.find(); 
        res.send(thegarrettCars); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.garrettCars_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: garrettCars detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.garrettCars_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: garrettCars create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.garrettCars_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: garrettCars delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.garrettCars_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: garrettCars update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.garrettCars_view_all_Page = async function(req, res) { 
    try{ 
        thegarrettCars = await garrettCars.find(); 
        res.render('garrettCars', { title: 'garrettCars Search Results', results: thegarrettCars }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 