import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../App.scss'

class TeacherSidebar extends Component {


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
                    <li><Link className="nav-link" to="/upload-teacher">تکلیف جدید</Link></li>
                    <li><Link className="nav-link" to="/download-teacher">تکالیف ارسال شده دانشجویان</Link></li>
                    <li><Link className="nav-link" to="/homeworks-teacher">تکالیف گذشته</Link></li>
                </ul>
            </div>
        </>
    }
    
}
TeacherSidebar.propTypes = {
    
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(TeacherSidebar));