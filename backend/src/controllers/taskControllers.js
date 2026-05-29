export const getAllTasks = (req,res)=>{
    res.send("Hello from the backend!");
};

export const createTasks = (req,res)=>{
    res.status(201).json({messsage: "nhiemj vu them moi thanh cong"})
};

export const updateTasks = (req,res)=>{
  res.status(200).json({messsage: "nhiemj vu thay doi moi thanh cong"})
};
export const delteTasks = (req,res)=>{
   res.status(200).json({messsage: "nhiemj vu xoa thanh cong"})
};