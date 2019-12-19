const express = require('express');
const router = express.Router();
const User = require('../model/user');
const HomeWorks = require('../model/HomeWork');
const HomeworkUser = require('../model/homework-user');
router.get('/',(req,res)=>{

    HomeworkUser.find({UserOwner: req.headers.id}).select({ "Homework": 1, "_id": 0}).then(results => {

      console.log(results)

      let homeworksArray = results.map(function(result) {

         
        let HW = HomeWorks.findOne({_id: result.Homework}).then(HWresult =>{

               console.log("resultH" + HWresult) 
               
              // HW = HWresult; 
                return HWresult;
                 
            }).catch(err =>{
                console.log('can not set hw ..'+ err)
            })

            console.log('HW' + HW)

            return HW
        })
        console.log('homeworksArray' + homeworksArray)
        res.json(homeworksArray);    
      
    }).catch(err => {
        console.log('can not find hw..' + err)
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


module.exports = router;