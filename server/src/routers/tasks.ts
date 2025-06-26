import express from 'express';
import {Task} from '../models/Task';

const router=express.Router();
let tasks:Task[]=[];
let currentId=1;

router.post('/',(req,res)=>{
    const newTask:Task={
        id:currentId++,
        title:req.body.title,
        description:req.body.description,
        dueDate:req.body.dueDate,
        priority:req.body.priority,
        completed:false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.get('/',(req,res)=>{res.json(tasks)});

router.get('/:id',(req,res)=>{
    const task=tasks.find(t=>t.id==parseInt(req.params.id));
    if(task){res.json(task);}
    else {res.status(404).json({error: "Task not found"});}
})

router.put('/:id',(req,res)=>{
    const task=tasks.findIndex(t=>t.id==parseInt(req.params.id));
    if (task !=- -1) {
        tasks[task].title=req.body.title;
        tasks[task].description=req.body.description;
        tasks[task].completed=req.body.completed;
    }
});

router.delete('/:id',(req,res)=>{
    const id= Number(req.params.id);
    tasks=tasks.filter(t=>t.id!=id);
    res.sendStatus(204);
});

export default router;