import React from "react";
import { connect } from "react-redux";
import {
  activeButtonSelector,
  flightsListSelector
} from "../../flights.selectors";
import * as flightsActions from "../../flights.actions";
import "./button.scss";

const Departures = ({ getFlightsList, isLoading, flightsList }) => {
  let isActive = isLoading || flightsList.length < 1 ? "not-active" : "active";

  return (
    <button
      className={`departures-btn ${isActive} btn`}
      onClick={() => getFlightsList("departure")}
    >
      <i className="fas fa-plane-departure"></i>
      {"\u00A0"} <span> Departures</span>
    </button>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: activeButtonSelector(state),
    flightsList: flightsListSelector(state)
  };
};

export default connect(mapStateToProps, flightsActions)(Departures);
