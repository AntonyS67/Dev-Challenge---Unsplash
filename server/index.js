const express = require('express');
const cors = require('cors');
const connect = require('./config/connect');

// Create Server
const app = express();

// Connect DB
connect();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({extended:true}))

// Routes
app.use('/api/images',require('./routes/imageRoute'));

app.listen(PORT,()=>{
    console.log('Server started at port ',PORT);
});