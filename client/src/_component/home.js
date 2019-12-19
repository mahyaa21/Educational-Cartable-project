import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

 class Home extends React.Component{

  
    checkRoute = () =>{
      /*   const {role} = this.props.auth.user

        switch(role){
            case 'student':
                this.props.history.push('/student');
            case 'teacher':
                this.props.history.push('/teacher');
            case 'admin':
                this.props.history.push('/admin');
            default:
                alert('you are not registerd!')            
        } */
    }
    render(){
        return<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        
      {/*   {!isAuthenticated || <Sidebar/>} */}
        
    </div>
    }
    
}
Home.propTypes = {
    //registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth,
    courseStatus: state.courseStatus
});

export default connect(mapStateToProps)(withRouter(Home))
