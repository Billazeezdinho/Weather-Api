require('dotenv').config()
const express = require('express');
const router = require('./router/weatherRouter')
const PORT = process.env.PORT;
const cors = require('cors');
const morgan = require('morgan');

const app = express()

app.use(express.json());
app.use(cors({origin: '*'}));
app.use(morgan('dev'));
app.use('/api/v1', router);

app.listen(PORT, ()=>{
   console.log( `Server is listening to PORT ${PORT}`)
})
