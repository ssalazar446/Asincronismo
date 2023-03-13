const db = require('../models');
const { Router } =  require('express')
const router = Router ();

//Método GET
router.get('/', (req, res) =>{
    res.send({Title: 'Hello USERS'});
});

//Método POST
router.post('/', async (req, res) =>{
    let name = req.body.name;
    let email = req.body.name;
    let password = req.body.password;
    try {
        await db.User.create ({
            name,
            email,
            password,
        });
        res.status(200).send({Msg: 'User created'})
    }catch(error){
        res.status(400).send({Msg: 'User Not created'})
    }


});

module.exports = router;