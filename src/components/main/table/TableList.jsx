import React from "react";
import { connect } from "react-redux";
import { flightsListSelector, spinnerSelector } from "../../flights.selectors";
import Spinner from "../../spinner/Spinner";
import ItemsList from "../../itemsList/ItemsList";
import "./tableList.scss";

const TableList = ({ flights, isLoading }) => {
  if (flights.length < 1) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <table className="flights-details">
      <thead className="table-head">
        <tr className="details-header">
          <th>Terminal</th>
          <th>Local Time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>AirLine</th>
          <th>Flight</th>
        </tr>
      </thead>
      <tbody className="table-body">
        <ItemsList data={flights} />
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  flights: flightsListSelector(state),
  isLoading: spinnerSelector(state)
});

export default connect(mapStateToProps)(TableList);
