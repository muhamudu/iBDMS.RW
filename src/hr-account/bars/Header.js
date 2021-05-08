import React from 'react';

class HeaderLeft extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="header-left">
                    <div className="menu-icon dw dw-menu"></div>
                    <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
                    <div className="header-search">
                        <form>
                            <div className="form-group mb-0">
                                <input type="text" className="form-control search-input" placeholder="Search Here"/>
                                <i className="dw dw-search2 search-icon"></i>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="header-right">
                    <div className="dashboard-setting user-notification">
                        <div className="dropdown">
                            <a className="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
                                <i className="dw dw-settings2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="user-notification">
                        <div className="dropdown">
                            <a className="dropdown-toggle no-arrow" role="button" data-toggle="dropdown">
                                <i className="icon-copy dw dw-notification"></i>
                                <span className="badge notification-active"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="notification-list mx-h-350 customscroll">
                                    <ul>
                                        <li>
                                            <a>
                                                <img src="vendors/images/img.jpg" alt=""/>
                                                <h3>NDAYISHIMIYE Muhamudu</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="vendors/images/photo1.jpg" alt=""/>
                                                <h3>Lea R. Frith</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="vendors/images/photo2.jpg" alt=""/>
                                                <h3>Erik L. Richards</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="vendors/images/photo3.jpg" alt=""/>
                                                <h3>John Doe</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="vendors/images/photo4.jpg" alt=""/>
                                                <h3>Renee I. Hansen</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="vendors/images/img.jpg" alt=""/>
                                                <h3>Vicki M. Coleman</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-info-dropdown">
                        <div className="dropdown">
                            <a className="dropdown-toggle" role="button" data-toggle="dropdown">
                                <span className="user-icon">
                                    <img src="vendors/images/photo1.jpg" alt=""/>
                                </span>
                                <span className="user-name">N.Muhamudu</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                <a className="dropdown-item" href="profile.html"><i className="dw dw-user1"></i> Profile</a>
                                <a className="dropdown-item" href="faq.html"><i className="dw dw-help"></i> Help</a>
                                <a className="dropdown-item" href="login.html"><i className="dw dw-logout"></i> Log Out</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="github-link">
                        <a href="https://github.com/dropways/deskapp" target="_blank"><img src="vendors/images/github.svg" alt=""/></a>
                    </div> */}
                </div>
            </div>
        );  
    }
}
export default HeaderLeft;