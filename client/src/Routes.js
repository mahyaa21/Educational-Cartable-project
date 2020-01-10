// import React from 'react';
// import { Switch, Redirect } from 'react-router-dom';

// import { RouteWithLayout } from './_component';
// import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
// import RegisterCourseUser from './_component/admin/registerCourseUser';

// import {
//   Dashboard as DashboardView,
//   ProductList as ProductListView,
//   UserList as UserListView,
//   Icons as IconsView,
//   Account as AccountView,
//   Settings as SettingsView,
//   SignUp as SignUpView,
//   SignIn as SignInView,
//   NotFound as NotFoundView
// } from './views';

// const Routes = () => {
//   return (
//     <Switch>
//       <Redirect
//         exact
//         from="/"
//         to="/dashboard"
//       />
//       <RouteWithLayout
//         component={DashboardView}
//         exact
//         layout={MainLayout}
//         path="/dashboard"
//       />
//       <RouteWithLayout
//         component={UserListView}
//         exact
//         layout={MainLayout}
//         path="/users"
//       />
//       <RouteWithLayout
//         component={ProductListView}
//         exact
//         layout={MainLayout}
//         path="/products"
//       />
//       <RouteWithLayout
//         component={RegisterCourseUser}
//         exact
//         layout={MainLayout}
//         path="/registerCourseUser"
//       />
//       {/* <RouteWithLayout
//         component={TypographyView}
//         exact
//         layout={MainLayout}
//         path="/typography"
//       /> */}
//       <RouteWithLayout
//         component={IconsView}
//         exact
//         layout={MainLayout}
//         path="/icons"
//       />
//       <RouteWithLayout
//         component={AccountView}
//         exact
//         layout={MainLayout}
//         path="/account"
//       />
//       <RouteWithLayout
//         component={SettingsView}
//         exact
//         layout={MainLayout}
//         path="/settings"
//       />
//       <RouteWithLayout
//         component={SignUpView}
//         exact
//         layout={MinimalLayout}
//         path="/sign-up"
//       />
//       <RouteWithLayout
//         component={SignInView}
//         exact
//         layout={MinimalLayout}
//         path="/sign-in"
//       />
//       <RouteWithLayout
//         component={NotFoundView}
//         exact
//         layout={MinimalLayout}
//         path="/not-found"
//       />
//       <Redirect to="/not-found" />
//     </Switch>
//   );
// };

// export default Routes;
import React from 'react';
import { BrowserRouter as  Route } from 'react-router-dom';
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
const Routes = () => { 
  return<>
    <Route exact path="/register" component={Register} />
    <Route exact path="/addnewuser" component={AddNewUser} />
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
    </>
}

export default Routes;