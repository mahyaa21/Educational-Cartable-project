const express = require('express');
const router = express.Router();
const Course = require('../model/course')
const User = require('../model/user');
const CourseUser = require('../model/course-user');

router.get('/',(req,res)=>{

    CourseUser.find({}).then(response=>{
        res.json(response);
    }).catch(err=>{
        console.log('can not show course-user bcz ..'+ err)
    })
    
})

router.get('/get-students',(req,res)=>{

  User.find({role:'student'}).then(userFind=>{
    res.send(userFind)
  })

})



router.get('/get-courses',(req,res)=>{

  Course.find({}).then(courseFind=>{
    res.send(courseFind)
  })

})

 router.post('/create',(req,res,next)=>{

   
  const newCU = new CourseUser;
   Promise.all([ User.findOne({name: req.body.student}),Course.findOne({name: req.body.course})]).then(values=>{
    console.log('newcu',values);
     newCU.Course = values[1].id;
     newCU.Student = values[0].id;
     
     newCU.save().then(courseSaved => {
      res.send(newCU);
    }).catch(err => {
      res.send('CU does not saved because ...' + err);
    }) 

   })
      

 })

 router.get('/studentlist/:id',(req,res)=>{

   let studentArray = [];
  
  CourseUser.find({Course: encodeURIComponent(req.params.id)}).select({ "Student": 1, "_id": 0}).then(results => {
  
      console.log(results);
      async function findingStudent() {
          
          for (let i = 0; i < results.length; i++){
              let studentId = results[i];
              let student = await  User.findOne({ _id: studentId.Student });
              
              studentArray.push(student);
             
          }
         
          res.send(studentArray);
      }
      findingStudent()
    
  }).catch(err => {
      console.log('can not find hw..' + err)
  });



 })

 router.get('/notstudentlist/:id',(req,res)=>{

  let studentArray = [];
  console.log('encode',req.params.id)
 CourseUser.find({Course: req.params.id}).select({ "Student": 1, "_id": 0}).then(results => {
 
   let studentId=[]
   results.forEach(Id => {
     studentId.push(Id.Student);
   })
   console.log(results);
   async function findingStudent() {
     await User.find({ _id: { $nin: [...studentId] } }).then(notstudent => {
       res.send(notstudent)
     }).catch(err => {
       console.log("not student can not find bcz..",err)
     })
   }
    //  async function findingStudent() {
         
    //      for (let i = 0; i < results.length; i++){
    //          let studentId = results[i];
    //          let student = await  User.findOne({ _id: studentId.Student });
    //          console.log(student);
    //          studentArray.push(student);
    //          console.log("studentArrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",studentArray)
    //      }
    //      console.log("studentArrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",studentArray)
    //      res.send(studentArray);
    //  }
     findingStudent()
   
 }).catch(err => {
     console.log('can not find hw..' + err)
 });

 console.log("homeworksArray" + studentArray)

})

module.exports = router;