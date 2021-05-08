import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../bars/Header';
// import PreLoader from '../bars/Pre-loader';
import SidebarLeft from '../bars/SidebarLeft';
import SidebarRight from '../bars/SidebarRight';

// Modals
import DepartementModal from '../modals/DepartementModal';
import EditDepartementModal from '../modals/EditDepartement';

class Departement extends React.Component{
    render(){
        return (
            <div>
                {/* <div>{<PreLoader/>}</div>  */}
                <div>{<Header/>}</div>
                <div>{<SidebarRight/>}</div>
                <div>{<SidebarLeft/>}</div>

                {/* Modals */}
                <div>{<DepartementModal/>}</div>
                <div>{<EditDepartementModal/>}</div>

                <div className="mobile-menu-overlay"></div>
                <div class="main-container">
                    <div class="pd-ltr-20 xs-pd-20-10">
                        <div class="min-height-200px">
                            <div class="page-header">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="title">
                                            <h4>Add New Depart</h4>
                                        </div>
                                        <nav aria-label="breadcrumb" role="navigation">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link></li>
                                                {/* <li class="breadcrumb-item active" aria-current="page">....</li> */}
                                            </ol>
                                        </nav>
                                    </div>
                                    <div class="col-md-6 col-sm-12 text-right">
                                        <div class="dropdown">
                                            <button class="btn btn-primary" data-toggle="modal" data-target="#AddDepartementModal"><i class="icon-copy dw dw-add"></i> Add Departement</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div>{<PageHeader/>}</div> */}

                            {/* <!-- Simple Datatable start --> */}
                            <div class="card-box mb-30">
                                <div class="pd-20">
                                    <h4 class="text-blue h4">All Departement Recorded</h4>
                                    
                                </div>
                                <div class="pb-20">
                                    <table class="data-table table stripe hover nowrap">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th class="table-plus datatable-nosort">Departement Name</th>
                                                <th>Head of Departement</th>
                                                <th>Comment</th>
                                                <th class="datatable-nosort">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td class="table-plus">Gloria F. Mead</td>
                                                <td>25</td>
                                                <td>Sagittarius</td>
                                                <td>
                                                    <div class="dropdown">
                                                        <Link class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" role="button" data-toggle="dropdown">
                                                            <i class="dw dw-more"></i>
                                                        </Link>
                                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                            <button class="dropdown-item"  data-toggle="modal" data-target="#EditDepartementModal"><i class="dw dw-edit2"></i> Edit</button>
                                                            <Link class="dropdown-item" to=""><i class="dw dw-delete-3"></i> Delete</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <!-- Simple Datatable End --> */}
                        </div>
                    </div>
                </div>
            </div>
            
        );  
    }
}
export default Departement;