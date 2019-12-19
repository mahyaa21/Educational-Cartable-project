import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../App.scss'

class StudentSidebar extends Component {


    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
           // this.props.history.push('/');
        }else{
            this.props.history.push('/');
            alert('not authenticated')
           
        }
    }
   

    render() {

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