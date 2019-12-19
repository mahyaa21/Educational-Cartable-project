import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class Homeworks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            homeworks: []
        }

    }

    onChangeHandler = event => {

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })

    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/');
        } else {
            this.props.history.push('/');
            alert('not authenticated')

        }

    }

    componentWillMount() {

        axios.get('/api/users/showhomeworks', {
            // receive two    parameter endpoint url ,form data 
            headers: {
                id: this.props.auth.user.id
            }
        }).then(res => {
            this.setState({ homeworks: [...res.data] })
        })

    }


    render() {
        const { homeworks } = this.state;
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', flexDirection: 'column' }}>

            <table>
                <tbody>
                    <tr>
                        <th>HomeWorks added</th>
                    </tr>

                    {homeworks.map(homework => {
                        return <tr key={homework.id}>
                            <td>{homework.name}</td>
                        </tr>
                    })}



                </tbody>
            </table>

        </div>
    }
}




Homeworks.propTypes = {
    //TeacherUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Homeworks))