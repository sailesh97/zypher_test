import React from 'react';


const delivered = (props) => {
    let delivered = null;
    if(props.status){
        delivered = (
            <div className="d-inline-block">
                <div className="rounded-circle bg-success p-2 m-xs-2 mx-xs-auto d-inline-block" style={{ boxSizing: "border-box" }}>
                    <i className="fas fa-check font-weight-bold text-white" style={{ fontSize: "25px" }} />
                </div>
                <p className="font-weight-bold ">Delivered</p>
            </div>
        );
    }
    else{
        delivered = (
            <div className="d-inline-block">
                <div className="rounded-circle p-2 m-xs-2 mx-xs-auto d-inline-block" style={{ boxSizing: "border-box", backgroundColor: "rgba(128,128,128,0.9)" }}>
                <i className="far fa-check-circle font-weight-bold text-white" style={{ fontSize: "25px" }} />
                </div>
                <p className="font-weight-bold ">Delivered</p>
            </div>
        );
    }
    return (
        <React.Fragment>
            {delivered}
        </React.Fragment>
    )
}

export default delivered;