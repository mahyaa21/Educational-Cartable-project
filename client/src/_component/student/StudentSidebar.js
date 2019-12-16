import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../App.scss'
import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
//import Sidebar from 'react-bootstrap-sidebar';
// import Upload from './Upload';
import { FaBars } from 'react-icons/fa';
class StudentSidebar extends Component {


    // constructor(props) {
    //     super(props);
    //     this.toggleNavbar = this.toggleNavbar.bind(this);
    //     this.state = {
    //     collapsed: true,
    //     };
    //     }
    //     toggleNavbar() {
    //     this.setState({
    //     collapsed: !this.state.collapsed,
    //     });
    //     }
    

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
           // this.props.history.push('/');
        }else{
            this.props.history.push('/');
            alert('not authenticated')
           
        }
    }
   

    render() {
        const {isAuthenticated, user} = this.props.auth;
        return<>
       
            <div>
                <ul>
                    <li><Link className="nav-link" to="/upload-student">سوالات</Link></li>
                    <li><Link className="nav-link" to="/download-student">ارسال تکالیف</Link></li>
                    <li><Link className="nav-link" to="/student-homeworks">تکالیف قبلا ارسال شده</Link></li>
                </ul>
            </div>
        </>
    }
    
}
StudentSidebar.propTypes = {
    
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(StudentSidebar));