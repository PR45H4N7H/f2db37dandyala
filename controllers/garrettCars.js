var garrettCars = require('../models/garrettCars'); 
 
// List of all garrettCarss 
// List of all garrettCarss 
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
 

// for a specific garrettCars. 
exports.garrettCars_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await garrettCars.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle garrettCars create on POST. 
exports.garrettCars_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new garrettCars(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"garrettCars_type":"goat", "cost":12, "size":"large"} 
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
 
// Handle garrettCars delete form on DELETE. 
exports.garrettCars_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await garrettCars.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle garrettCars update form on PUT. 
// Handle garrettCars update form on PUT. 
exports.garrettCars_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await garrettCars.findById(req.params.id) 
        // Do updates of properties 
        if(req.body.carName) toUpdate.carName = req.body.carName; 
        if(req.body.carModel) toUpdate.carModel = req.body.carModel; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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
exports.garrettCars_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await garrettCars.findById( req.query.id) 
        res.render('detail',  { title: 'garrettCars Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a garrettCars. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.garrettCars_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('garrettCarscreate', { title: 'garrettCars Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a garrettCars. 
// query provides the id 
exports.garrettCars_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await garrettCars.findById(req.query.id) 
        res.render('garrettCarsupdate', { title: 'garrettCars Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.garrettCars_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await garrettCars.findById(req.query.id) 
        res.render('garrettCarsdelete', { title: 'garrettCars Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 