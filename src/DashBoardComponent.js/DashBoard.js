import React from "react";
import { connect } from "react-redux";
import "./DashBoard.css";

const DashBoard = (props) => {
  const userDetails = props.data;
  return (
    <div>
      <h1 className="heading-align">DashBoard</h1>
      <ul className="lists">
        {userDetails.map((item) => (
          <div key={item.id} className="dashboard-container">
            <li>
              <span className="list-heading">ID:</span>
              {item.id}
            </li>
            <li>
              <span className="list-heading">Name:</span>
              {item.name}
            </li>
            <li>
              <span className="list-heading">Age</span>
              {item.age}
            </li>
            <li>
              <span className="list-heading">Gender:</span>
              {item.gender}
            </li>
            <li>
              <span className="list-heading">Email:</span>
              {item.email}
            </li>
            <li>
              <span className="list-heading">PhoneNo:</span>
              {item.phoneNo}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.dataJson,
  };
};
export default connect(mapStateToProps)(DashBoard);
