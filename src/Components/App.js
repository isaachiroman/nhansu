import React, { Component } from 'react';
import './../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import TopNav from './TopNav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';

class App extends Component {
  render() {
    return (
       <Router>
         <div id="wrapper">
                <Nav/>
                <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopNav/>
                    <div className="container-fluid">
                      <DieuHuongURL/>
                      </div>
                </div>
                <Footer/>
                </div>
            </div>
       
        
      </Router>
    );
  }
}

export default App;
