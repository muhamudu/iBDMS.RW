import React from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends React.Component{
    render(){
        return (
            <div>
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <Link to="/">
                                <img src="vendors/images/deskapp-logo.svg" alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src="vendors/images/forgot-password.png" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="login-box bg-white box-shadow border-radius-10">
                                    <div className="login-title">
                                        <h2 className="text-center text-primary">Forgot Password</h2>
                                    </div>
                                    <h6 className="mb-20">Enter your email address to reset your password</h6>
                                    <form>
                                        <div className="input-group custom">
                                            <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                                            <div className="input-group-append custom">
                                                <span className="input-group-text"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-5">
                                                <div className="input-group mb-0">
                                                    {/* <!--
                                                        use code for form submit
                                                        <input className="btn btn-primary btn-lg btn-block" type="submit" value="Submit">
                                                    --> */}
                                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="font-16 weight-600 text-center" data-color="#707373">OR</div>
                                            </div>
                                            <div className="col-5">
                                                <div className="input-group mb-0">
                                                    <Link className="btn btn-outline-primary btn-lg btn-block" to="/">Log-In</Link>
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
export default ForgotPassword;