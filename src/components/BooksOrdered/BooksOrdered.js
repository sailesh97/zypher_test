import React from "react";
import i1 from '../../assets/1.jpg';
import i2 from "../../assets/2.jpg";
import i3 from "../../assets/3.jpg";
import Moment from "react-moment";

const booksOrdered = (props) => {
   
  return <React.Fragment>

      {console.log(props.details.orderedOn)}

      <div className="container mt-5">
          <div className="row px-5 pt-5 d-flex align-items-center flex-row" style={{ backgroundColor: "rgba(128,128,128,0.4)" }}>
              <div className="d-flex align-items-center flex-column bd-highlight" style={{ height: " 300px" }}>
                  <div className="px-2 pt-2 bd-highlight">
                      <i className="fas fa-subway py-2 px-1 bg-white" />
                  </div>
                  <div className=" bd-highlight h-100" style={{ border: "2px dotted blue" }} />
              </div>

              <div>
                  <p className="text-secondary font-weight-bold mb-1 pb-0">
                      Order received
                </p>
                  <p className="text-secondary font-weight-bold mb-1 pb-0">
                      <Moment format="DD/MM/YYYY">
                          {props.orderedOn}
                      </Moment>
                  </p>

                  <p className="text-secondary font-weight-bold mb-1 pb-0">
                      Delivery Status: {props.deliveryStatus ? "Delivered" : "Not Delivered"}
                  </p>

                  <div className="row pb-4">
                      <div className="col-sm">
                          <img src={i1} alt="" />
                      </div>
                      <div className="col-sm">
                          <img src={i2} alt="" />
                      </div>
                      <div className="col-sm">
                          <img src={i3} alt="" />
                      </div>
                  </div>
              </div>
          </div>

        <div className="row px-5 d-flex align-items-center flex-row" style={{ backgroundColor: "rgba(128,128,128,0.4)" }}>
          <div className="d-flex align-items-center flex-column bd-highlight mb-3" style={{ height: " 300px" }}>
            <div className="px-2 pb-2 bd-highlight">
              <i className="fas fa-route py-2  px-1 bg-white" />
            </div>
            <div className=" bd-highlight  h-75" style={{ border: "2px dotted blue" }} />
          </div>
              <div>
                  <p className="text-secondary font-weight-bold mb-1 pb-0">
                      Order received
                    </p>
                  <p className="text-secondary font-weight-bold mb-1 pb-0">
                      <Moment format="DD/MM/YYYY">
                          {props.orderedOn}
                      </Moment>
                  </p>

                  <p className="text-secondary font-weight-bold mb-1 pb-0">
                      Delivery Status: {props.deliveryStatus ? "Delivered" : "Not Delivered"}
                  </p>

                  <div className="row pb-4">
                      <div className="col-sm">
                          <img src={i1} alt="" />
                      </div>
                      <div className="col-sm">
                          <img src={i2} alt="" />
                      </div>
                      <div className="col-sm">
                          <img src={i3} alt="" />
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </React.Fragment>;
};

export default booksOrdered;
