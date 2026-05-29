import express from "express";
import {getAllTasks, createTasks, updateTasks,delteTasks} from "../controllers/taskControllers.js"

const router = express.Router();


router.get('/',getAllTasks);

router.post('/:id', createTasks);

router.put('/:id', updateTasks);

router.delete('/:id',delteTasks);

export default router;