import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import noteBookStore from "../stores/noteBookStore";
import { CreatButtonStyled } from "../styles";

const NoteBookModal = ({ isOpen, closeModal, createNoteBook, createNotes }) => {
  const [noteBook, setNoteBook, notes, setNotes] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNoteBook({ ...noteBook, [event.target.name]: event.target.value });
    setNotes({ ...notes, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (noteBook) noteBookStore.createNoteBook(noteBook);
    else noteBookStore.createNotes(notes);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="noteBook Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label> subject </label>
            <input
              value={noteBook.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <CreatButtonStyled type="submit">{createNoteBook}</CreatButtonStyled>
        </div>
      </form>
    </Modal>
  );
};

export default NoteBookModal;
