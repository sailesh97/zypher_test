import React from 'react'

const location = () => {
  return <div className="shadow p-3 my-5 bg-white rounded  text-center" style={{ boxShadow: "2px solid black" }}>
      <h1>Address</h1>
      <div className="p-3 text-center px-5">
        <h6 className="font-weight-bold mb-2">CASA</h6>
        <p className="text-secondary lead font-weight-bold">
          Plot No: 915 ,Mahanadi Bihar,Karnataka-753004
        </p>
        <div className="row mx-auto">
          <div className="col text-center">
            <button type="button" className="btn shadow p-3">
              <i className="fas fa-trash-alt px-1" />
              Edit
            </button>
                  <button type="button" className="btn shadow p-3">
                      <i className="fas fa-pencil-alt px-1" />
                      Delete
            </button>
          </div>
         
        </div>
      </div>
    </div>;
}

export default location;