import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <Link to="/notebooks" style={{ margin: 10, float: " right" }}>
        My NoteBook List
      </Link>
    </nav>
  );
};

export default NavBar;
