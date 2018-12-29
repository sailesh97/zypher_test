import React from 'react';


const placed = () => {
  return <React.Fragment>
      <div className="d-inline-block">
        <div className="rounded-circle bg-success p-2 m-xs-2 mx-xs-auto d-inline-block" style={{ boxSizing: "border-box" }}>
          <i className="fas fa-check font-weight-bold text-white" style={{ fontSize: "25px" }} />
        </div>
        <p className="font-weight-bold ">Placed</p>
      </div>

      <div className="border border-success d-inline-block" style={{ borderWidth: "thick 10px", width: "20%" ,marginBottom: '40px'}} />
    </React.Fragment>;
}

export default placed;