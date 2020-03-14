import React from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  activeButtonSelector,
  flightsListSelector
} from "../../flights.selectors";
import * as flightsActions from "../../flights.actions";
import "./button.scss";
import qs from "qs";

const Arrivals = ({ isLoading, flightsList }) => {
  const isActive =
    isLoading && flightsList.length > 1 ? "active" : "not-active";

  const search = qs.parse(useLocation().search, { ignoreQueryPrefix: true })
    .search;

  const isQueryParam = search ? `/arrival?search=${search}` : "arrival";

  return (
    <Link to={isQueryParam}>
      <button className={`arrivals-btn ${isActive} btn`}>
        <i className="fas fa-plane-arrival"></i>
        <span> {"\u00A0"}Arrivals</span>
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

export default connect(mapStateToProps, flightsActions)(Arrivals);
