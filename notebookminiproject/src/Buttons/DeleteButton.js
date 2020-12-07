import React from "react";
import { Button } from "../styles";
import noteBookStore from "../stores/noteBookStore";

const DeleteButton = ({ notebookId }) => {
  return (
    <Button onClick={() => noteBookStore.deleteNoteBook(notebookId)}>
      delete
    </Button>
  );
};

export default DeleteButton;
