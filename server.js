
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;
const cors = require('cors');
const dbConnect  = require('./config/db/dbConnection');


// middleware 
const app = express();
app.use(cors());
app.use(express.json());
dbConnect();

if(process.env.NODE_ENV === 'development'){
    app.get('/', (req, res)=> res.status(200).send('development'))
}else{
    app.get('/', (req, res) => res.status(200).send('production'));
}


app.get('', (req, res) => {
  res.send('I love you Allah ');
});

app.get('/data', (req, res)=>{
    res.send({
        message: 'Hello World',
        data: 'hello',
    })
})

app.listen(port, () => {
  console.log(`Server Is Running on port ${port}`);
});
