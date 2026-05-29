import express from 'express';
import taskRouter from './routes/taskRouters.js'

const app = express();

app.use('/api/tasks', taskRouter);
app.listen(5001,()=>{
    console.log('Server is running on port 5001');
});
