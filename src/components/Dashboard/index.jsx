import React, { useState, useEffect } from 'react';
import Layout from '../layouts/layout';
import HomeCard from './homeCard';
import useLocalStorage from "use-local-storage";

function Dashboard() {
    const [userInfo, setUserId] = useLocalStorage("userId", "");
    return (
        <Layout>
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-md-12 grid-margin">
                        <div className="row">
                            <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                <h3 className="font-weight-bold">
                                    Welcome <strong className="text-success">{userInfo.surname} {userInfo.firstname} </strong>
                                </h3>
                                <h6 className="font-weight-normal mb-0">
                                    All systems are running smoothly!
                                </h6>
                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="justify-content-end d-flex">
                                    <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                        <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            <i className="mdi mdi-calendar" /> Today ( August 4, 2022)
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                                            <a className="dropdown-item" href="#">January - March</a>
                                            <a className="dropdown-item" href="#">March - June</a>
                                            <a className="dropdown-item" href="#">June - August</a>
                                            <a className="dropdown-item" href="#">August - November</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <HomeCard />
                    <div className="col-md-6 grid-margin transparent">
                        <div className="row">
                            <div className="col-md-6 mb-4 stretch-card transparent">
                                <div className="card card-tale">
                                    <div className="card-body">
                                        <p className="mb-4">Today’s Search</p>
                                        <p className="fs-30 mb-2">4006</p>
                                        <p>10.00% (30 days)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 stretch-card transparent">
                                <div className="card card-dark-blue">
                                    <div className="card-body">
                                        <p className="mb-4">Total Activities</p>
                                        <p className="fs-30 mb-2">61344</p>
                                        <p>22.00% (30 days)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                                <div className="card card-light-blue">
                                    <div className="card-body">
                                        <p className="mb-4">Number of Meetings</p>
                                        <p className="fs-30 mb-2">34040</p>
                                        <p>2.00% (30 days)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 stretch-card transparent">
                                <div className="card card-light-danger">
                                    <div className="card-body">
                                        <p className="mb-4">Number of Clients</p>
                                        <p className="fs-30 mb-2">47033</p>
                                        <p>0.22% (30 days)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
export default Dashboard;
