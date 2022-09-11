const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port =3000;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(urlencoded());



// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))


// END POINTS
app.get('/', (req,res)=>{
    const params = {title: 'Pubg', content: 'Pubg is the best game'}
    res.status(200).render('index.pug', params)
})


app.post('/', (req, res)=>{
    form_data = req.body;
    name = form_data.name;
    gender= form_data.gender;
    address = form_data.address
    details = form_data.details;

    const outputToWrite = `The name of the gymmer is ${name} and gender is ${gender} residing at ${address} `

    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted succesfully'}
    res.status(200).render('index.pug', params)
   
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started succesfully on port ${port}`);
})