import React from "react";
import { FiSearch } from "react-icons/fi";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/utils/get-order-status";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3  pb-4 rounded-lg ml-4 mr-5 flex-row flex-wrap flex-wrap-reverse items-center flex-1 justify-between items-center">
      <div className="flex justify-between items-center">
        <strong className="text-gray-800">Product Sell</strong>
        <span className="flex ">
          <div className="relative mr-2">
            <FiSearch
              fontSize={25}
              className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 "
            />
            <input
              type="text"
              placeholder="Search"
              className="text-sm bg-purple-100 font-normal mr-5 flex focus:outline-none active:outline-none h-10 w-[16rem] rounded-lg pl-10 pr-4"
            />
          </div>
          <span className="text-gray-400 font-medium text-sm bg-purple-100 rounded-lg flex items-center px-3">
            <span>Last 30 days</span>
            <i className="ri-arrow-down-s-line text-gray-400 text-2xl ml-2"></i>
          </span>
        </span>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Shipping Address</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/order/${order.id}`}>#{order.id}</Link>
                </td>
                <td>
                  <Link to={`/product/${order.product_id}`}>
                    #{order.product_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>
                    {order.customer_name}
                  </Link>
                </td>
                <td>{format(new Date(order.order_date), "dd MMM yyyy")}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
