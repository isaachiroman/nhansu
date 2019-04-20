import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
              
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to='/'>
                    <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link>
               
                <hr className="sidebar-divider my-0" />
                <div className="sidebar-heading">
                    Interface
                </div>
                
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>User</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        {/* <h6 className="collapse-header">Custom Components:</h6> */}
                        <Link to="/UserManage" className="collapse-item" >User Manage</Link>
                        <Link to="/UserProfile" className="collapse-item" >User Profile</Link>
                    </div>
                    </div>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
               {/* Sidebar Toggler (Sidebar) */}
                {/* <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
                </div> */}


                </ul>
              

        );
    }
}

export default Nav;