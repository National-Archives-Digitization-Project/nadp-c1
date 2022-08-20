import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from "use-local-storage";

function Layout({ children }) {

    const [userInfo, setuserInfo] = useState({});
    const [userId] = useLocalStorage("userId", "");

    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZm9AZ29sb2phbi5jb20iLCJhcGlLZXkiOiI3N0pFM05BLTc2VEUyWVEtVTY0WTJSSS1JR0c3V0FBIiwiaWF0IjoxNjYwNjEyNzkxfQ.TcU9gxjyXLAs3i_0k9IehX8R4_Dofgwf_bPOLLDu2uA'
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/users/${userId}/info`, { headers: headers }).then((result) => {
            setuserInfo(result.data.data);
        })
    }, []);

    return (
        <div className="container-scroller">
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo mr-5" href="/dashboard"><img src="./assets/imgs/logo-full.png" className="mr-2" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" href="/dashboard"><img src="./assets/imgs/logo.png" alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="icon-menu" />
                    </button>
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-search d-none d-lg-block">
                            <div className="input-group">
                                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                    <span className="input-group-text" id="search">
                                        <i className="icon-search" />
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="icon-bell mx-0" />
                                <span className="count" />
                            </a>


                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">
                                    All Notifications
                                </p>

                                {/* <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="ti-info-alt mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">Just now</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="ti-settings mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">Settings</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
                                            Private message
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="ti-user mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
                                    </div>
                                </a> */}


                            </div>

                        </li>
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                <img src="./assets/images/faces/face28.jpg" alt="profile" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item" href="/dashboard">
                                    <i className="ti-settings text-primary" />
                                    Settings
                                </a>
                                <a className="dropdown-item" href="/dashboard/logout">
                                    <i className="ti-power-off text-primary" />
                                    Logout
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-settings d-none d-lg-flex">
                            <a className="nav-link" href="#">
                                <i className="icon-ellipsis" />
                            </a>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="icon-menu" />
                    </button>
                </div>
            </nav>
            <div className="container-fluid page-body-wrapper">
                <div id="right-sidebar" className="settings-panel">
                    <i className="settings-close ti-close" />
                </div>
                <nav className="sidebar sidebar-offcanvas" id="sidebar">


                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/">
                                <i className="icon-grid menu-icon" />
                                <span className="menu-title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/users">
                                <i className="icon-head menu-icon" />
                                <span className="menu-title">Manage Users</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/search-log">
                                <i className="icon-head menu-icon" />
                                <span className="menu-title">Search Log</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/logout">
                                <i className="ti-power-off text-white menu-icon" />
                                <span className="menu-title">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="main-panel">

                    {children}

                    <footer className="footer">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022. <a href="#">National Archives, Enugu</a> All
                                rights reserved.</span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">www.golojan.com <i className="ti-heart text-danger ml-1" /></span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Layout;
