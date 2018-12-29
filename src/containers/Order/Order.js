import React, { Component } from 'react';
import Placed from '../../components/OrderStatus/Placed';
import Shipped from "../../components/OrderStatus/Shipped";
import Delivered from "../../components/OrderStatus/Delivered";

import BooksOrdered from "../../components/BooksOrdered/BooksOrdered";
import './Order.css';

import axios from 'axios';

class Order extends Component {

    state = {
        data:{}
    }

    componentDidMount(){
        axios.post("https://test-zypher.herokuapp.com/orders/getOrderDetails", { "orderId": "5c1a9b66b269441f4b217d5d" })
            .then(res => { 
                this.setState(res.data);
                console.log(res);
                console.log(this.state.data);
            });
    }
  render() {
      const orderData = this.state.data; 
      const { _id} = orderData;
    return <div>
        <div>
          <div className="p-3 w-50 text-center mx-auto Order" style={{ backgroundColor: "rgba(128,128,128,0.1)" }}>
            <h5 className="text-secondary font-weight-bold">
              Order Status
            </h5>
            <h6 className="font-weight-bold p-2 bg-white w-100">
              OrderId: {_id}
            </h6>
            <div className="mt-4">
              <Placed />
              <Shipped status={this.state.deliveryStatus} />
              <Delivered status={this.state.deliveryStatus} />
            </div>

            <BooksOrdered details={orderData} />
          </div>
        </div>
      </div>;
  }
}

export default Order;