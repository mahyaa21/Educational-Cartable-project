const express = require('express');
const router = express.Router();
const User = require('../model/user');
const HomeWorks = require('../model/HomeWork');
const HomeworkUser = require('../model/homework-user');
const Course = require('../model/course');
router.post('/',(req,res) => {
    let homeWorksArray = [];
    console.log(req.body.course)
    Course.findOne({ name: req.body.course }).then(resultCourse => {
        console.log('resultcourse',resultCourse)
        HomeWorks.find({ Course: resultCourse.id, User: req.headers.id }).then(resultHomework => {
            res.json(resultHomework)
        }).catch(err => {
            console.log(err)
        })
        // HomeworkUser.find({ UserOwner: req.headers.id }).select({ "Homework": 1,"_id": 0 }).then(results => {
    
       
            
       
        //     console.log(results);
        //     async function findingHomework() {
            
        //         for (let i = 0; i < results.length; i++) {
        //             let homeWorkId = results[i];
        //             let homeWork = await HomeWorks.findOne({ _id: homeWorkId.Homework });
              
        //             homeWorksArray.push(homeWork);
                
        //         }
            
        //         res.send(homeWorksArray);
        //     }
        //     findingHomework()
      
        // }).catch(err => {
        //     console.log('can not find hw..' + err)
        // });
    }).catch(err => {
        console.log('course not find bcz..',err)
    })
    console.log("homeworksArray" + homeWorksArray)

});

router.post('/getstudent/homework',(req,res) => {
    Course.findOne({ name: req.body.course }).then(resultCourse => {
        console.log('resultcourse',resultCourse)
        HomeWorks.find({ Course: resultCourse.id, User: {$nin: req.headers.id} }).then(resultHomework => {
            res.json(resultHomework)
        }).catch(err => {
            console.log(err)
        })
})
})

router.get('/student',(req, res)=>{
    // let homeWorksArray = [];
    HomeWorks.find({ User: req.headers.id }).then(result => {
        console.log(result)
        res.json(result);
    }).catch(err => {
        console.log('homeworks can not finds bcz..',err)
    })

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
router.get('/gethomeworks/:teacherId',(req,res) => {
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

router.get('/course',(req,res) => {
    console.log(req.headers.course)
    HomeWorks.find({ Course: req.headers.id }).then(result => {
        
        res.json(result);
    }).catch(err => {
        console.log(err)
    })
})

    module.exports = router;