import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Login extends React.Component{
    render(){
        return (
            <div className="login-page">
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <Link to="/Dashboard">
                                <img src="vendors/images/deskapp-logo.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-7">
                                <img src="vendors/images/login-page-img.png" alt="" />
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="login-box bg-white box-shadow border-radius-10">
                                    <div className="login-title">
                                        <h2 className="text-center text-primary">Login To iDMS</h2>
                                    </div>
                                    <form>
                                        <div className="select-role">
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label className="btn active">
                                                    <input type="radio" name="options" id="admin"/>
                                                    <div className="icon"><img src="vendors/images/briefcase.svg" className="svg" alt=""/></div>
                                                    <span>I'm</span>
                                                    Manager
                                                </label>
                                                <label className="btn">
                                                    <input type="radio" name="options" id="user"/>
                                                    <div className="icon"><img src="vendors/images/person.svg" className="svg" alt=""/></div>
                                                    <span>I'm</span>
                                                    Employee
                                                </label>
                                            </div>
                                        </div>
                                        <div className="input-group custom">
                                            <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                                            <div className="input-group-append custom">
                                                <span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
                                            </div>
                                        </div>
                                        <div className="input-group custom">
                                            <input type="password" className="form-control form-control-lg" placeholder="**********"/>
                                            <div className="input-group-append custom">
                                                <span className="input-group-text"><i className="dw dw-padlock1"></i></span>
                                            </div>
                                        </div>
                                        <div className="row pb-30">
                                            <div className="col-6">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                    <label className="custom-control-label" for="customCheck1">Remember</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="forgot-password"><NavLink to="/ForgotPassword">Forgot Password</NavLink></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="input-group mb-0">
                                                    {/* <!--
                                                        use code for form submit
                                                        <input className="btn btn-primary btn-lg btn-block" type="submit" value="Sign In">
                                                    --> */}
                                                    <Link to="/Dashboard" className="btn btn-primary btn-lg btn-block">Sign-In</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}
export default Login;