const router = require ("express").Router()

const db = require ("../db/db.json")
const { v4: uuidv4 } = require('uuid');
const fs = require("fs")


//API Route
router.get('/api/notes', (req, res) => {
    res.json(db)

    
    // console.log(chosen);
    
    // for (let i = 0; i < notes.length; i++) {
        //     if (chosen === notes[i].routeName) {
            //         return res.json(notes[i]);
            //     }
            // }
    // return res.send('No notes found');
});

//Post Route
router.post('/api/notes', (req, res) => {
    
  
    req.body.id=uuidv4() 
    console.log(req.body);
    
    db.push(req.body);
    
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
 
    
    res.json(db);
    
    
  
});

module.exports=router

// const chosen = req.param.notes;