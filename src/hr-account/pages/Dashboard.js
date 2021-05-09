import React from 'react'; 
import Footer from '../bars/Footer';
import Header from '../bars/Header';
import SidebarLeft from '../bars/SidebarLeft';
import { Link } from 'react-router-dom';



class Dashboard extends React.Component{
    render(){
        return (
            <div>
                {/* <div>{<PreLoader/>}</div>  */}
                <div>{<Header/>}</div>
                <div>{<SidebarLeft/>}</div>
                <div className="mobile-menu-overlay"></div>

                {/* ==================================Container===================================
                =============================================================================== */}
                <div className="main-container">
                    <div className="xs-pd-20-10 pd-ltr-20">
                        <div class="title pb-20">
                            <h2 class="h3 mb-0">Business Overview</h2>
                        </div>

                        <div class="row pb-10">
                            <div class="col-xl-3 col-lg-3 col-md-6 mb-20">
                                <div class="card-box height-100-p widget-style3">
                                    <div class="d-flex flex-wrap">
                                        <div class="widget-data">
                                            <div class="weight-700 font-24 text-dark">75</div>
                                            <div class="font-14 text-secondary weight-500">Total Employess</div>
                                        </div>
                                        <div class="widget-icon">
                                            <div class="icon" data-color="#00eccf"><i class="icon-copy dw dw-calendar1"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 mb-20">
                                <div class="card-box height-100-p widget-style3">
                                    <div class="d-flex flex-wrap">
                                        <div class="widget-data">
                                            <div class="weight-700 font-24 text-dark">124,551</div>
                                            <div class="font-14 text-secondary weight-500">Total Client</div>
                                        </div>
                                        <div class="widget-icon">
                                            <div class="icon" data-color="#ff5b5b"><span class="icon-copy ti-heart"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 mb-20">
                                <div class="card-box height-100-p widget-style3">
                                    <div class="d-flex flex-wrap">
                                        <div class="widget-data">
                                            <div class="weight-700 font-24 text-dark">400+</div>
                                            <div class="font-14 text-secondary weight-500">Total Staff</div>
                                        </div>
                                        <div class="widget-icon">
                                            <div class="icon"><i class="icon-copy fa fa-users" aria-hidden="true"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 mb-20">
                                <div class="card-box height-100-p widget-style3">
                                    <div class="d-flex flex-wrap">
                                        <div class="widget-data">
                                            <div class="weight-700 font-24 text-dark">Frw 50,000</div>
                                            <div class="font-14 text-secondary weight-500">Budget</div>
                                        </div>
                                        <div class="widget-icon">
                                            <div class="icon" data-color="#09cc06"><i class="icon-copy fa fa-money" aria-hidden="true"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8 col-md-6 mb-20">
                                <div class="card-box height-100-p pd-20 min-height-200px">
                                    <div class="d-flex justify-content-between pb-10">
                                        <div class="h5 mb-0">Top Administration</div>
                                        <div class="dropdown">
                                            <Link class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" data-color="#1b3133" to="" role="button" data-toggle="dropdown">
                                                <i class="dw dw-more"></i>
                                            </Link>
                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                <Link class="dropdown-item" to="#"><i class="dw dw-eye"></i> View</Link>
                                                <Link class="dropdown-item" to="#"><i class="dw dw-edit2"></i> Edit</Link>
                                                <Link class="dropdown-item" to="#"><i class="dw dw-delete-3"></i> Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user-list">
                                        <ul>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <div class="name-avatar d-flex align-items-center pr-2">
                                                    <div class="avatar mr-2 flex-shrink-0">
                                                        <img src="vendors/images/photo1.jpg" class="border-radius-100 box-shadow" width="50" height="50" alt=""/>
                                                    </div>
                                                    <div class="txt">
                                                        <span class="badge badge-pill badge-sm" data-bgcolor="#e7ebf5" data-color="#265ed7">4.9</span>
                                                        <div class="font-14 weight-600">Dr. Neil Wagner</div>
                                                        <div class="font-12 weight-500" data-color="#b2b1b6">Pediatrician</div>
                                                    </div>
                                                </div>
                                                <div class="cta flex-shrink-0">
                                                    <Link to="#" class="btn btn-sm btn-outline-primary">Schedule</Link>
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <div class="name-avatar d-flex align-items-center pr-2">
                                                    <div class="avatar mr-2 flex-shrink-0">
                                                        <img src="vendors/images/photo2.jpg" class="border-radius-100 box-shadow" width="50" height="50" alt=""/>
                                                    </div>
                                                    <div class="txt">
                                                        <span class="badge badge-pill badge-sm" data-bgcolor="#e7ebf5" data-color="#265ed7">4.9</span>
                                                        <div class="font-14 weight-600">Dr. Ren Delan</div>
                                                        <div class="font-12 weight-500" data-color="#b2b1b6">Pediatrician</div>
                                                    </div>
                                                </div>
                                                <div class="cta flex-shrink-0">
                                                    <Link to="#" class="btn btn-sm btn-outline-primary">Schedule</Link>
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <div class="name-avatar d-flex align-items-center pr-2">
                                                    <div class="avatar mr-2 flex-shrink-0">
                                                        <img src="vendors/images/photo3.jpg" class="border-radius-100 box-shadow" width="50" height="50" alt=""/>
                                                    </div>
                                                    <div class="txt">
                                                        <span class="badge badge-pill badge-sm" data-bgcolor="#e7ebf5" data-color="#265ed7">4.9</span>
                                                        <div class="font-14 weight-600">Dr. Garrett Kincy</div>
                                                        <div class="font-12 weight-500" data-color="#b2b1b6">Pediatrician</div>
                                                    </div>
                                                </div>
                                                <div class="cta flex-shrink-0">
                                                    <Link to="#" class="btn btn-sm btn-outline-primary">Schedule</Link>
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center justify-content-between">
                                                <div class="name-avatar d-flex align-items-center pr-2">
                                                    <div class="avatar mr-2 flex-shrink-0">
                                                        <img src="vendors/images/photo4.jpg" class="border-radius-100 box-shadow" width="50" height="50" alt=""/>
                                                    </div>
                                                    <div class="txt">
                                                        <span class="badge badge-pill badge-sm" data-bgcolor="#e7ebf5" data-color="#265ed7">4.9</span>
                                                        <div class="font-14 weight-600">Dr. Callie Reed</div>
                                                        <div class="font-12 weight-500" data-color="#b2b1b6">Pediatrician</div>
                                                    </div>
                                                </div>
                                                <div class="cta flex-shrink-0">
                                                    <Link to="#" class="btn btn-sm btn-outline-primary">Schedule</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 mb-20">
                                <div class="card-box height-100-p pd-20 min-height-200px">
                                    <div class="max-width-300 mx-auto">
                                        <img src="vendors/images/upgrade.svg" alt=""/>
                                    </div>
                                    <div class="text-center">
                                        <div class="h5 mb-1">Upgrade to Pro</div>
                                        <div class="font-14 weight-500 max-width-200 mx-auto pb-20" data-color="#a6a6a7">
                                            You can enjoy all our features by upgrading to pro.
                                        </div>
                                        <Link to="#" class="btn btn-primary btn-lg">Upgrade</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="title pb-20 pt-20">
                            <h2 class="h3 mb-0">Quick Start</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-20">
                                <Link to="#" class="card-box d-block mx-auto pd-20 text-secondary">
                                    <div class="img pb-30">
                                        <img src="vendors/images/medicine-bro.svg" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3 class="h4">Services</h3>
                                        <p class="max-width-200 ">We provide superior health care in a compassionate maner</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-4 mb-20">
                                <Link to="#" class="card-box d-block mx-auto pd-20 text-secondary">
                                    <div class="img pb-30">
                                        <img src="vendors/images/remedy-amico.svg" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3 class="h4">Management</h3>
                                        <p class="max-width-200 ">Look for prescription and over-the-counter drug information.</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-4 mb-20">
                                <Link to="#" class="card-box d-block mx-auto pd-20 text-secondary">
                                    <div class="img pb-30">
                                        <img src="vendors/images/paper-map-cuate.svg" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3 class="h4">Locations</h3>
                                        <p class="max-width-200 ">Convenient locations when and where you need them.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>{<Footer/>}</div>
                    </div>
                </div>
            </div>
        );  
    }
}
export default Dashboard;