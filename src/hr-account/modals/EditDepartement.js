import React from 'react';


class EditDepartementModal extends React.Component{
    render(){
        return (

            <div class="modal fade" id="EditDepartementModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myLargeModalLabel">Update Departement</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <form>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            {/* <label>col-md-4</label> */}
                                            <input type="text" placeholder="Enter Departement Name" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            {/* <label>col-md-4</label> */}
                                            <input type="text" placeholder="Enter Head of Departement" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Comment <span>(Optional)</span></label>
                                            <textarea class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Update Departement</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );  
    }
}
export default EditDepartementModal;