import React from 'react';
import HeaderLeft from './Header-left';
import HeaderRight from './Header-right';
import PageHeader from './PageHeader';
// import PreLoader from './Pre-loader';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';


class Departement extends React.Component{
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

                <div className="mobile-menu-overlay">
                    <div class="main-container">
                        <div class="pd-ltr-20 xs-pd-20-10">
                            <div class="min-height-200px">
                                <div>{<PageHeader/>}</div>

                                {/* <!-- Simple Datatable start --> */}
                                <div class="card-box mb-30">
                                    <div class="pd-20">
                                        <h4 class="text-blue h4">Data Table Simple</h4>
                                        <p class="mb-0">you can find more options <a class="text-primary" href="https://datatables.net/" target="_blank">Click Here</a></p>
                                    </div>
                                    <div class="pb-20">
                                        <table class="data-table table stripe hover nowrap">
                                            <thead>
                                                <tr>
                                                    <th class="table-plus datatable-nosort">Name</th>
                                                    <th>Age</th>
                                                    <th>Office</th>
                                                    <th>Address</th>
                                                    <th>Start Date</th>
                                                    <th class="datatable-nosort">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="table-plus">Gloria F. Mead</td>
                                                    <td>25</td>
                                                    <td>Sagittarius</td>
                                                    <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>30</td>
                                                    <td>Gemini</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>20</td>
                                                    <td>Gemini</td>
                                                    <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>30</td>
                                                    <td>Sagittarius</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>25</td>
                                                    <td>Gemini</td>
                                                    <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>20</td>
                                                    <td>Sagittarius</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>18</td>
                                                    <td>Gemini</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>30</td>
                                                    <td>Sagittarius</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>30</td>
                                                    <td>Sagittarius</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>30</td>
                                                    <td>Gemini</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>30</td>
                                                    <td>Gemini</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table-plus">Andrea J. Cagle</td>
                                                    <td>30</td>
                                                    <td>Gemini</td>
                                                    <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                                                    <td>29-03-2018</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                <i class="dw dw-more"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                <a class="dropdown-item" href="#"><i class="dw dw-eye"></i> View</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-edit2"></i> Edit</a>
                                                                <a class="dropdown-item" href="#"><i class="dw dw-delete-3"></i> Delete</a>
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
            </div>
        );  
    }
}
export default Departement;