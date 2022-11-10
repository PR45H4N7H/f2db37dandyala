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
exports.garrettCars_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new garrettCars(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.carName = req.body.carName; 
    document.carModel = req.body.carModel; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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