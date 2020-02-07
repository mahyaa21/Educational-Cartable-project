const express = require('express');
const router = express.Router();
const User = require('../model/user');
const HomeWorks = require('../model/HomeWork');
const HomeworkUser = require('../model/homework-user');
const Course = require('../model/course');
router.get('/',(req, res)=>{
    let homeWorksArray = [];
    HomeworkUser.find({UserOwner: req.headers.id}).select({ "Homework": 1, "_id": 0}).then(results => {
    
        console.log(results);
        async function findingHomework() {
            
            for (let i = 0; i < results.length; i++){
                let homeWorkId = results[i];
                let homeWork = await HomeWorks.findOne({ _id: homeWorkId.Homework });
                // console.log(homeWork);
                homeWorksArray.push(homeWork);
                // console.log("homeWorksArrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",homeWorksArray)
            }
            // console.log("homeWorksArrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",homeWorksArray)
            res.send(homeWorksArray);
        }
        findingHomework()
      
    }).catch(err => {
        console.log('can not find hw..' + err)
    });

    console.log("homeworksArray" + homeWorksArray)

})

router.get('/get-homework',(req,res)=>{

    HomeworkUser.find({UserOwner: req.headers.id}).then(result => {
        console.log('userOwner-id' + req.headers.id)
       res.json(result)
        
        
    }).catch(err => {
        console.log('can not find hw..' + err)
    })

})
//homework user uploaded
router.get('/gethomeworks/user/:teacherId',(req,res) => {
console.log('coouurresese')
    Course.find({ name: req.headers.course}).then(resultCourse => {
      
        Homeworks.find({User: req.params.teacherId, Course:resultCourse.id}).then(result => {
            console.log('course',result)
           res.json(result)
    
        }).catch(err => {
            console.log('can not find hw..' + err)
        })
    }).catch(err => {
    console.log(err)
})    
    
})
//homework uploaded by students for teacher
router.get('/gethomeworks/students/:courseid',(req,res)=> {
    
    Homeworks.find({User: { $nin: req.headers.id }, Course:req.params.id}).then(result => {
        console.log('userOwner-id' + req.headers.id)
       res.json(result)

    }).catch(err => {
        console.log('can not find hw..' + err)
    })
})

module.exports = router;