import React from "react";
import { Link } from "react-router-dom";

function Nav({ names }) {
  return (
    <ul>
      <li><Link to={`/dogs/${names[0]}`}>{names[0]}</Link></li>
      <li><Link to={`/dogs/${names[1]}`}>{names[1]}</Link></li>
      <li><Link to={`/dogs/${names[2]}`}>{names[2]}</Link></li>
      <li><Link to={`/dogs/${names[3]}`}>{names[3]}</Link></li>
    </ul>
  );
}
// end

export default Nav;