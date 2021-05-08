import React from 'react';

class PreLoader extends React.Component{
    render(){
        return (
            <div className="pre-loader">
                <div className="pre-loader-box">
                    <div className="loader-logo"><img src="vendors/images/deskapp-logo.svg" alt=""/></div>
                    <div className='loader-progress' id="progress_div">
                        <div className='bar' id='bar1'></div>
                    </div>
                    <div className='percent' id='percent1'>0%</div>
                    <div className="loading-text">
                        Loading...
                    </div>
                </div>
            </div>
        );  
    }
}
export default PreLoader;