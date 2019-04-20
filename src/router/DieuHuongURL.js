import React, { Component } from 'react';
import { Route } from "react-router-dom";
import UserManage from '../Components/UserManage';
import Home from '../Components/Home';
// import UserManage from '../Components/UserProfile';
class DieuHuongURL extends Component {
  render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/UserManage/" component={UserManage} />
                    {/* <Route path="/UserProfile" component={UserProfile} /> */}
                </div>
                
        );
    }

    
}
export default DieuHuongURL;