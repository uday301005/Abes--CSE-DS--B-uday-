import express from 'express'
const app = express()
const port = 4001
// middleware
app.use(express.json())

const students = [
    {
        id: 1,
        name : "Rohit",
        class: "B.Tech"
    }
]
// first route
app.get('/',(req,res)=>{
      try {
       res.status(200).json({message: "Show all students",data: students})
      }
      catch(err) {
           res.status(500).json({message: "data not fetch", error : err.message })
      }
})

// search data for students
app.get('/:id',(req,res)=>{
   try {
     const id = res.parms.id;
     const student = students.find(s=>s.id);
     if(!student){
        return res.status(504).json({messge: " student Not found ",data : student})
     }
     res.status(2000).json({message:"Student Found" })
   }
   catch(err) {
      res.status(500).json({message: "failted to fetch ",error : err.message})
   }
})
// create data for students
app.post('/add',(req,res)=>{
   try{
    const newStudents = {
        id:students.length+1,
        ...req.body }
        students.push(newStudent);
        res.status(201).json({message: "studenst add successfully " , newStudents})
        
   }
   catch(err){
    res.status(501).json({message: "Student Not Added", error : err.message})
   }
})

// edit 
app.put('/edit/:id',(req,res)=>{
    try{
         const id = res.params.id;
         const idx = students.find(s=>s.id);
          if(idx == -1){
        return res.status(404).json({messge: " student Not found ",data : student})
     }
     const newStudents = {

     }

    }
    catch(err){
        res.status(507).json({message: "ID NOt find FOr updation",error: err.message})
    }
})

app.listen(()=>{
   console.log(`server run at http://localhost:${port}`);
   
})