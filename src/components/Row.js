import React from "react";

const styles = {
  img: {
    borderRadius: "100%"
  }
}

function TableRow(props) {
return (
    <tr>
    <th scope="row"><img src={props.img} alt={props.name} style={styles.img}></img></th>
    <td>{props.first}</td>
    <td>{props.last}</td>
    <td>{props.email}</td>
    <td>{props.phone}</td>
  </tr>
)
}

export default TableRow;

