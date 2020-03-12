import React from "react";
import { connect } from "react-redux";
import {
  activeButtonSelector,
  flightsListSelector
} from "../../flights.selectors";
import * as flightsActions from "../../flights.actions";
import "./button.scss";

const Arrivals = ({ getFlightsList, isLoading, flightsList }) => {
  let isActive = isLoading && flightsList.length > 1 ? "active" : "not-active";

  return (
    <button
      className={`arrivals-btn ${isActive} btn`}
      onClick={() => getFlightsList("arrival")}
    >
      <i className="fas fa-plane-arrival"></i> <span> {"\u00A0"}Arrivals</span>
    </button>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: activeButtonSelector(state),
    flightsList: flightsListSelector(state)
  };
};

export default connect(mapStateToProps, flightsActions)(Arrivals);
