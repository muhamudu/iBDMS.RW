import React from 'react';
import { Link } from 'react-router-dom';
class Footer extends React.Component{
    render(){
        return (
            <div className="footer-wrap pd-20 mb-20 card-box">
                2021&copy;iDBMS (internet Business Data Management System) <Link to="/www.idbms.rw">www.idbms.rw</Link>
            </div>
        );  
    }
}
export default Footer;