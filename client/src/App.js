import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Home from './_component/home/home';
import Navbar from './_component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './_component/Sidebar';
import Routes from './Routes';
import {IntlProvider} from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AddNewUser from './_component/admin/AddNewUser';
import RegisterCourseUser from './_component/admin/registerCourseUser';
import DownloadStudentHomework from './_component/student/DownloadHomeworks'
import UploadStudentHomework from './_component/student/UploadHomeworks';
import StudentHomeworks from './_component/student/Homeworks';
import DownloadTeacherHomework from './_component/teacher/DownloadHomeworks'
import UploadTeacherHomework from './_component/teacher/UploadHomeworks';
import TeacherHomeworks from './_component/teacher/Homeworks';
import Chat from './_component/chat/Chat';
import Teacher from './_component/teacher/teacher';
import student from './_component/student/student';
import courseRegister from './_component/admin/courseRegister';
import Admin from './_component/admin/index';
import Register from './_component/register';
import Login from './_component/Login';
// const history = createBrowserHistory();
class App extends Component {
  render() {
    const {lang} = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Router>
            {/* <div style={{height:'92.5%'}}> */}
                <Navbar/>
                {/* <div style={{display:'flex',flexDirection:'row',height:'100%',width:'100%'}}> */}
          
                <div className="container-fluid">
                <Route exact path="/" component={ Home } />
                {/* <div className="container"> */}
                <Route exact path="/addnewuser" component={AddNewUser} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/dashboard" component={Admin} />
                <Route path='/course' component={courseRegister} />
                <Route path='/registercourseuser' component={RegisterCourseUser} />
                <Route path='/teacher' component={Teacher} />
                <Route path='/student' component={student} />
                <Route path='/upload-student' component={UploadStudentHomework} />
                <Route path='/download-student' component={DownloadStudentHomework} />
                <Route path='/student-homeworks' component={StudentHomeworks} />
    <Route path='/upload-teacher' component={UploadTeacherHomework} />
    <Route path='/download-teacher' component={DownloadTeacherHomework} />
    <Route path='/homeworks-teacher' component={TeacherHomeworks} />
            <Route path='/chat' component={Chat} />
            <Sidebar/> 
                </div>
                 
                {/* </div> */}
            {/* </div> */}
          </Router>
        </IntlProvider>
    );
  }
}


App.propTypes = {
  lang: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  lang: state.locale.lang
})

export default connect(mapStateToProps)(withRouter(App));



