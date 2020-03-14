import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  activeButtonSelector,
  flightsListSelector
} from "../../flights.selectors";
import * as flightsActions from "../../flights.actions";
import "./button.scss";

const Departures = ({ isLoading, flightsList }) => {
  let isActive = isLoading || flightsList.length < 1 ? "not-active" : "active";

  return (
    <Link to="/departure">
      <button className={`departures-btn ${isActive} btn`}>
        <i className="fas fa-plane-departure"></i>
        {"\u00A0"} <span> Departures</span>
      </button>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: activeButtonSelector(state),
    flightsList: flightsListSelector(state)
  };
};

export default connect(mapStateToProps, flightsActions)(Departures);
