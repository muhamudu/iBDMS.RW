import React from 'react';
import { Link } from 'react-router-dom';

class SidebarLeft extends React.Component{
    render(){
        return (
            <div>
                <div className="left-side-bar">
                    <div className="brand-logo">
                        <Link to="/Dashboard" >
                            <img src="vendors/images/deskapp-logo.svg" alt="" className="dark-logo"/>
                            <img src="vendors/images/deskapp-logo-white.svg" alt="" className="light-logo"/>
                        </Link>
                        <div className="close-sidebar" data-toggle="left-sidebar-close">
                            <i className="ion-close-round"></i>
                        </div>
                    </div>
                    <div className="menu-block customscroll">
                        <div className="sidebar-menu">
                            <ul id="accordion-menu">
                                <li>
                                    <Link to="/Dashboard" className="dropdown-toggle no-arrow">
                                        <span className="micon dw dw-analytics-8"></span><span className="mtext">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Departement" className="dropdown-toggle no-arrow">
                                        <span className="micon dw dw-diagram"></span><span className="mtext">Departement</span>
                                    </Link>
                                </li>
                                
                                <li className="dropdown">
                                    <a href="javascript:;" className="dropdown-toggle">
                                        <span className="micon dw dw-add-user"></span><span className="mtext">Employee</span>
                                    </a>
                                    <ul className="submenu">
                                        <li><Link to="ManageEmployee">Manage Employees</Link></li>
                                        <li><Link to="Evaluation">Evaluation</Link></li>
                                        <li><Link to="EvaluationReport">Evaluation Report</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/Employees" className="dropdown-toggle no-arrow">
                                        <span className="micon dw dw-sheet"></span><span className="mtext">Payroll</span>
                                    </Link>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <div className="sidebar-small-cap">Extra</div>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-toggle no-arrow">
                                        <span className="micon dw dw-user"></span><span className="mtext">Profile</span>
                                    </Link>
                                    
                                </li>
                                <li>
                                    <Link to="" target="_blank" className="dropdown-toggle no-arrow">
                                        <span className="micon dw dw-paper-plane1"></span>
                                        <span className="mtext">More Toturials <img src="vendors/images/coming-soon.png" alt="" width="25" /></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        );  
    }
}
export default SidebarLeft;