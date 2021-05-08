import React from 'react';

class HeaderLeft extends React.Component{
    render(){
        return (
            <div className="header-left">
			    <div className="menu-icon dw dw-menu"></div>
			    <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
                <div className="header-search">
                    <form>
                        <div className="form-group mb-0">
                            <i className="dw dw-search2 search-icon"></i>
                            <input type="text" className="form-control search-input" placeholder="Search Here"/>
                            <div className="dropdown">
                                <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
                                    <i className="ion-arrow-down-c"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">From</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control form-control-sm form-control-line" type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">To</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control form-control-sm form-control-line" type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control form-control-sm form-control-line" type="text"/>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <button className="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
		    </div>
        );  
    }
}
export default HeaderLeft;