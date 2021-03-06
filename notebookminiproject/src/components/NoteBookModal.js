import React from "react";
import { useState } from "react";
import noteBookStore from "../stores/noteBookStore";
import Modal from "react-modal";
import { CreatButtonStyled } from "../styles";

const NoteBookModal = ({ isOpen, closeModal, createNoteBook }) => {
  const [noteBook, setNoteBook] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNoteBook({ ...noteBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteBookStore.createNoteBook(noteBook);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="subject Modal"
    >
      <h3>New subject</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label> Subject </label>
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
