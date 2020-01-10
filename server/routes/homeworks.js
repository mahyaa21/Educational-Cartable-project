const express = require('express');
const router = express.Router();
const User = require('../model/user');
const HomeWorks = require('../model/HomeWork');
const HomeworkUser = require('../model/homework-user');

router.get('/',async (req, res)=>{

   let Homeworks = await HomeworkUser.find({UserOwner: req.headers.id}).select({ "Homework": 1, "_id": 0}).then(results => {
    
        console.log(results);
        return [...results];
      
    }).catch(err => {
        console.log('can not find hw..' + err)
    });

    console.log("homeworks" + Homeworks)

   let homeworksArray =  Homeworks.map(async function(result) {
        
      let HW = await HomeWorks.findOne({_id: result.Homework}).then( HWresult =>{

                return {
                    name: HWresult.name,
                    _id: HWresult._id,
                    date: HWresult.date
                };
                 
            }).catch(err =>{
                console.log('can not set hw ..'+ err)
            })

            return HW;

            // console.log('HW' + HW)
         
        })

    // let tmp = await HomeworkUser.find({UserOwner: req.headers.id}).select({ "Homework": 1, "_id": 0});

    // tmp.map(()=>{

    // });

    console.log("after promises let homeworksArray" +  homeworksArray)

})

router.get('/get-homework',(req,res)=>{

    HomeworkUser.find({UserOwner: req.headers.id}).then(result => {
        console.log('userOwner-id' + req.headers.id)
       res.json(result)
        
        
    }).catch(err => {
        console.log('can not find hw..' + err)
    })

})


module.exports = router;