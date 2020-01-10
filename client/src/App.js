import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Home from './_component/home';
import Navbar from './_component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './_component/Sidebar';
import Routes from './Routes';
import {IntlProvider} from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class App extends Component {
  render() {
    const {lang} = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Router>
            <div style={{height:'92.5%'}}>
                <Navbar/>
                <div style={{display:'flex',flexDirection:'row',height:'100%'}}>
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Routes/>
                </div>
                 <Sidebar/> 
                </div>
            </div>
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



