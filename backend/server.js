const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
const taskrouter = require('./router/taskrouter')
const cors = require('cors')

app.use((req,res,next)=>{
   console.log('path'+req.path + 'method' + req.method);
    next();
})
 app.use(express.json())
 app.use(cors())
app.get('/',(req,res)=>{
    res.send("Server Okie")
})

//server to mongo connectint point         
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    
}).then(()=>{
 
        console.log('db connect successfully to' + process.env.MONGO_URI);
  
}).catch((error)=>{
    console.log(error);
})

// PORT
 const port = process.env.PORT || 4000;
  app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.use('/api/tasks',taskrouter)