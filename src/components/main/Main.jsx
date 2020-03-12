import React from "react";
import "./main.scss";
import Arrivals from "./button/Arrivals";
import Departures from "./button/Departures";
import TableList from "./table/TableList";

const Main = () => {
  return (
    <section className="main-section">
      <div className="buttons-fly">
        <Departures />
        <Arrivals />
      </div>
      <TableList />
    </section>
  );
};

export default Main;
