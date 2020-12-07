import React from "react";
import { Link } from "react-router-dom";

const NotesItem = (props) => {
  return (
    <>
      <Link to={"/notes"}>
        <a>{props.notes.name}</a>
      </Link>
    </>
  );
};

export default NotesItem;
