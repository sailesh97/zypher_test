import React from 'react';


const shipped = (props) => {
    let shipped = null;
    if(props.status){
        shipped = (
            <React.Fragment>
                <div className="d-inline-block">
                    <div className="rounded-circle bg-success p-2 m-xs-2 mx-xs-auto d-inline-block" style={{ boxSizing: "border-box" }}>
                        <i className="fas fa-check font-weight-bold text-white" style={{ fontSize: "25px" }} />
                    </div>
                    <p className="font-weight-bold ">Shipped</p>
                </div>

                <div className="border border-success d-inline-block" style={{ borderWidth: "thick 10px", width: "20%", marginBottom: '40px' }} />
            </React.Fragment>
    );
    }
    else{
        shipped = (
        <React.Fragment>
            <div className="d-inline-block">
              <div className="rounded-circle p-2 m-xs-2 mx-xs-auto d-inline-block" style={{ boxSizing: "border-box" ,backgroundColor:"rgba(128,128,128,0.9)"}}>
                <i className="fas fa-truck font-weight-bold text-white" style={{ fontSize: "20px" }} />
              </div>
              <p className="font-weight-bold ">Shipped</p>
            </div>

            <div className="border border-success d-inline-block" style={{ borderWidth: "thick 10px", width: "20%", marginBottom: "40px" }} />
          </React.Fragment>
        );
        
    }
    return (
        <React.Fragment>
            {shipped}  
        </React.Fragment>
          
    )
}

export default shipped;