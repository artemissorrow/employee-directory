import React from "react";

function TableRow(props) {
return (
    <tr>
    <th scope="row"><img src={props.img} alt={props.name}></img></th>
    <td>{props.first}</td>
    <td>{props.last}</td>
    <td>{props.email}</td>
    <td>{props.phone}</td>
  </tr>
)
}

export default TableRow;

