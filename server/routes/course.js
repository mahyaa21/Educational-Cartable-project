const express = require('express');
const router = express.Router();
const Course = require('../model/course')
const User = require('../model/user');
const CourseUser = require('../model/course-user');
router.get('/', (req, res) => {
    Course.find({}).then(courses => {
        res.json(courses)
    }).catch(err => {
        res.send('Course does not show because ...' + err);
      })
})

router.post('/getcourse/id',(req,res)=> {
    Course.findOne({ name: req.body.course }).then(course => {
        console.log(course);
        res.send(course.id)
    }).catch(err => {
        console.log(err);
    })
})

 router.post('/create',(req,res)=>{

    const newCourse = new Course;
    newCourse.name = req.body.name;
     newCourse.status = 'I';
     newCourse.teacher = req.body.teacher;
    newCourse.save().then(courseSaved => {
        res.send(newCourse);
      }).catch(err => {
        res.send('Course does not saved because ...' + err);
      })

 })

router.get('/getteacher/:id',(req,res) => {
    Course.findOne({ _id: req.params.id }).then(result => {
        User.findOne({ _id: result.teacher }).then(teacher => {
            res.send(teacher)
        }).catch(err => {
            console.log("teacher can not find bcz...",err)
        })
    }).catch(err => {
        console.log("course can not find bcz...",err)
    })
 })



router.get('/edit/:id',(req,res)=>{

    Course.findOne({_id: req.params.id}).then(course=>{

        //res.render('admin/corses/edit',{course: course});
        User.findOne({_id: req.params.id}).then(user=>{

            //res.render('admin/corses/edit',{course: course});
           // res.send(user);
    
        });
        res.send(course)
    });

})

router.get('/finish/:id',(req,res)=>{

    Course.findOne({_id: req.params.id}).then(course=>{

        // course.name = req.body.name;
        course.status = 'D';
        //  User.findOne({name: req.body.teacher}).then(teacherUser=>{
        //     course.teacher = teacherUser.id;
        // }); 
        course.save().then(savedcourse=>{

            // res.redirect('/courses');
            res.send(savedcourse)

        });


    })
});

router.delete('/:name',(req, res)=>{

    Course.findOne({name: req.params.name},'_id').then(res=>{

        // Course.deleteOne({_id: res.id}).then(result=>{

        //     console.log(result)
        //     res.send(result)
        //     //  alert('delete successfully!')
        //      // req.flash('success_message','category was successfully updated');
      
        //      // res.redirect('/courses');
      
        //   }).catch(err => {
        //     res.send('Course does not delete because ...' + err);
        //   });
    }).catch(err => {
        res.send('Course does not find because ...' + err);
      })

});
 

//get teacher courses
//homework user uploaded
router.get('/teacher/courses/:teacherId',(req,res) => {

    Course.find({ teacher: req.params.teacherId }).then(resultCourse => {
        console.log('course',resultCourse)
        res.json(resultCourse)
    }).catch(err => {
    console.log(err)
})    
    
})

module.exports = router;