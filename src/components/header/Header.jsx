import React, { useState, useEffect } from "react";
import * as flightActions from "../flights.actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.scss";

const Header = () => {
  const [searchValue, setValue] = useState("");

  return (
    <header className="header">
      <h2 className="title">SEARCH FLIGHT</h2>
      <form className="search-form">
        <div className="icon">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
        <input
          name="search"
          className="search-value"
          type="text"
          value={searchValue}
          onChange={() => setValue(event.target.value)}
          placeholder="Airline, destination, or flight #"
        />

        <Link
          to={`/departure?search=${searchValue}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <button className="search-btn" type="submit">
            Search
          </button>
        </Link>
      </form>
    </header>
  );
};

export default connect(null, flightActions)(Header);
