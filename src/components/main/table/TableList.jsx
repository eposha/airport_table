import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { flightsListSelector, spinnerSelector } from "../../flights.selectors";
import Spinner from "../../spinner/Spinner";
import ItemsList from "../../itemsList/ItemsList";
import * as flightsActions from "../../flights.actions";
import "./tableList.scss";
import qs from "qs";

const TableList = ({ getFlightsList, flights, isLoading }) => {
  const { direction } = useParams();
  const search = qs.parse(useLocation().search, { ignoreQueryPrefix: true })
    .search;

  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  if (isLoading) {
    return <Spinner />;
  }

  let allFlights = !search
    ? flights
    : flights.filter(flight => flight.codeShareData[0].codeShare === search);

  const isFound =
    allFlights.length < 1 ? (
      <tr>
        <th colSpan="7" className="not-found">
          Not Found
        </th>
      </tr>
    ) : (
      <ItemsList data={allFlights} />
    );

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
      <tbody className="table-body">{isFound}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  flights: flightsListSelector(state),
  isLoading: spinnerSelector(state)
});

export default connect(mapStateToProps, flightsActions)(TableList);
