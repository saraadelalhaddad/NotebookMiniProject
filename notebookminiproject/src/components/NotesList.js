import React from "react";
import "../Notes.css";
import AddButton from "../Buttons/AddButton";

const NotesList = () => {
  return (
    <>
      <AddButton />
      <body>
        <h4>Notes</h4>
        <div class="lines"></div>
        <ul id="List"></ul>
      </body>
    </>
  );
};

export default NotesList;
