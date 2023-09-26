const taskmodel = require('../model/modeltask')
const mongoose = require('mongoose')

//to create a task - post

const createtask = async(req,res)=>{
    const {name,number,date,address,email} = req.body;
    try{
        const task = await taskmodel.create({name,number,date,address,email});
        res.status(200).json(task);
    }catch(e){
        res.status(404).json({error:e.message})
    }
};

// To get all ID -GET

const gettasks = async (req,res)=>{
    try{
        const task = await taskmodel.find({}); 
        res.status(200).json(task)
    }catch(e){
        res.status(404).json({error:e.message})
    }
}

// get single id get 
const getsingle =async(req,res)=>{
const {id} = req.params;
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({message:'id is not found'})
}
try{
    const singletask = await taskmodel.findById(id)
    res.status(200).json(singletask)
}catch(e){
    res.status(404).json({error:e.message})
}
}

//to update a id - patch

const update =async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'id is not found'})
    }
    try{
   const task = await taskmodel.findByIdAndUpdate({_id:id},{...req.body})
res.status(200).json(task)
    }catch(e){
res.status(404).json({error:e.message})
    }
}

//delete id - delete:

const deletetask = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'id is not found'})
    }
    try{
const task = await taskmodel.findByIdAndDelete(id)
res.status(200).json(task)
    }catch(e){
        res.status(404).json({error:e.message})
    }
}

module.exports={createtask,gettasks,getsingle,update,deletetask};
