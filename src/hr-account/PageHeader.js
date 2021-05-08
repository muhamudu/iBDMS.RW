import React from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends React.Component{
    render(){
        return (
            <div class="page-header">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="title">
                            <h4>All Data Needed</h4>
                        </div>
                        <nav aria-label="breadcrumb" role="navigation">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">....</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-md-6 col-sm-12 text-right">
                        <div class="dropdown">
                            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                January 2021
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">February 2021</a>
                                <a class="dropdown-item" href="#">March 2021</a>
                                <a class="dropdown-item" href="#">May 2021</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}
export default PageHeader;