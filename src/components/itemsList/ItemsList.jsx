import React from "react";
import "./item-list.scss";
import moment from "moment";

const ItemsList = ({ data }) => {
  return data.map(item => {
    const terminal = item.term === "A" ? "terminal" : "terminal d";
    const status = item.status === "LN" ? "Landed " : "Departed at ";
    const logo = item.airline.en.logoSmallName;
    const name = item.airline.en.name;
    const flight = item.codeShareData[0].codeShare;
    const timeFact = moment(item.timeTakeofFact).format("HH:mm");
    const localTime = moment(item.timeToStand).format("HH:mm");
    const teminalNo = item.term;
    const destination =
      item["airportToID.name_en"] || item["airportFromID.name_en"];

    return (
      <tr key={item.ID} className="details-body">
        <td className="details-item">
          <span className={`${terminal}`}> {teminalNo}</span>
        </td>
        <td className="details-item time">{localTime}</td>
        <td className="details-item destination">{destination}</td>
        <td className="details-item status">
          {status} {timeFact}
        </td>
        <td className="details-item">
          <span className="logo">
            <img src={logo} alt={name} />
            <span>{name}</span>
          </span>
        </td>
        <td className="details-item flight">{flight}</td>
      </tr>
    );
  });
};

export default ItemsList;
