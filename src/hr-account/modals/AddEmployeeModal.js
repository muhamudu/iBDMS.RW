import React from 'react';


class AddEmployeeModal extends React.Component{
    render(){
        return (

            <div class="modal fade bs-example-modal-lg" id="AddEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myLargeModalLabel">Add Employee</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>

                        <div class="modal-body">
                            <div class="wizard-content">
                                <form class="tab-wizard wizard-circle wizard">
                                    <h5>Personal Info</h5>
                                    <section>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label >First Name :</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label >Last Name :</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email Address :</label>
                                                    <input type="email" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Phone Number :</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label >Date of Birth :</label>
                                                    <input type="text" class="form-control date-picker" placeholder="Select Date"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Nationality</label>
                                                    <select class="custom-select2 form-control" name="state" style={{width: "100%", height: "38px"}}>
                                                        <optgroup label="Nationalities">
                                                            <option value="AK">Alaska</option>
                                                            <option value="HI">Hawaii</option>
                                                            <option value="CA">California</option>
                                                            <option value="NV">Nevada</option>
                                                            <option value="OR">Oregon</option>
                                                            <option value="WA">Washington</option>
                                                            <option value="AZ">Arizona</option>
                                                            <option value="CO">Colorado</option>
                                                            <option value="ID">Idaho</option>
                                                            <option value="MT">Montana</option>
                                                            <option value="NE">Nebraska</option>
                                                            <option value="NM">New Mexico</option>
                                                            <option value="ND">North Dakota</option>
                                                            <option value="UT">Utah</option>
                                                            <option value="WY">Wyoming</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label >Current City :</label>
                                                    <input type="text" class="form-control" placeholder="Current City"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Current Address :</label>
                                                    <input type="text" class="form-control" placeholder="Current Address"/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </section>
                                    {/* <!-- Step 2 --> */}
                                    <h5>Job Status</h5>
                                    <section>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Job Title :</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Company Name :</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Job Description :</label>
                                                    <textarea class="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* <!-- Step 3 --> */}
                                    <h5>Interview</h5>
                                    <section>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Interview For :</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Interview Type :</label>
                                                    <select class="form-control">
                                                        <option>Normal</option>
                                                        <option>Difficult</option>
                                                        <option>Hard</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Interview Date :</label>
                                                    <input type="text" class="form-control date-picker" placeholder="Select Date"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Interview Time :</label>
                                                    <input class="form-control time-picker" placeholder="Select time" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* <!-- Step 4 --> */}
                                    <h5>Remark</h5>
                                    <section>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Behaviour :</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Confidance</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Result</label>
                                                    <select class="form-control">
                                                        <option>Select Result</option>
                                                        <option>Selected</option>
                                                        <option>Rejected</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Comments</label>
                                                    <textarea class="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );  
    }
}
export default AddEmployeeModal;