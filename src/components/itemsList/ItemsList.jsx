import React from "react";
import moment from "moment";

const ItemsList = ({ data }) => {
  return data.map(item => {
    return (
      <tr key={item["ID"]} className="details-body">
        <td className="details-item">{item.term}</td>
        <td className="details-item">
          {moment(item.timeToStand).format("HH:mm")}
        </td>
        <td className="details-item">{item["airportFromID.name_en"]}</td>
        <td className="details-item">test</td>
        <td className="details-item">test</td>
        <td className="details-item"></td>
      </tr>
    );
  });
};

export default ItemsList;
