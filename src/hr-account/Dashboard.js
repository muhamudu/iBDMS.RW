import React from 'react';
import Footer from './Footer';
import HeaderLeft from './Header-left';
import HeaderRight from './Header-right';
// import PreLoader from './Pre-loader';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';


class Dashboard extends React.Component{
    render(){
        return (
            <div>
                {/* <div>{<PreLoader/>}</div>  */}
                <div className="header">
                    <div>{<HeaderLeft/>}</div>
                    <div>{<HeaderRight/>}</div>
                </div>
                <div>{<SidebarRight/>}</div>
                <div>{<SidebarLeft/>}</div>
                <div className="mobile-menu-overlay"></div>

                {/* ==================================Container===================================
                =============================================================================== */}
                <div className="main-container">
                    <div className="pd-ltr-20">
                        <div className="card-box pd-20 height-100-p mb-30">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <img src="vendors/images/banner-img.png" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <h4 className="font-20 weight-500 mb-10 text-capitalize">
                                        Welcome back <div className="weight-600 font-30 text-blue">NDAYISHIMIYE Muhamudu!</div>
                                    </h4>
                                    <p className="font-18 max-width-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic non repellendus debitis iure, doloremque assumenda. Autem modi, corrupti, nobis ea iure fugiat, veniam non quaerat mollitia animi error corporis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 mb-30">
                                <div className="card-box height-100-p widget-style1">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="progress-data">
                                            <div id="chart"></div>
                                        </div>
                                        <div className="widget-data">
                                            <div className="h4 mb-0">2020</div>
                                            <div className="weight-600 font-14">Contact</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 mb-30">
                                <div className="card-box height-100-p widget-style1">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="progress-data">
                                            <div id="chart2"></div>
                                        </div>
                                        <div className="widget-data">
                                            <div className="h4 mb-0">400</div>
                                            <div className="weight-600 font-14">Deals</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 mb-30">
                                <div className="card-box height-100-p widget-style1">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="progress-data">
                                            <div id="chart3"></div>
                                        </div>
                                        <div className="widget-data">
                                            <div className="h4 mb-0">350</div>
                                            <div className="weight-600 font-14">Campaign</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 mb-30">
                                <div className="card-box height-100-p widget-style1">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="progress-data">
                                            <div id="chart4"></div>
                                        </div>
                                        <div className="widget-data">
                                            <div className="h4 mb-0">$6060</div>
                                            <div className="weight-600 font-14">Worth</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 mb-30">
                                <div className="card-box height-100-p pd-20">
                                    <h2 className="h4 mb-20">Activity</h2>
                                    <div id="chart5"></div>
                                </div>
                            </div>
                            <div className="col-xl-4 mb-30">
                                <div className="card-box height-100-p pd-20">
                                    <h2 className="h4 mb-20">Lead Target</h2>
                                    <div id="chart6"></div>
                                </div>
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