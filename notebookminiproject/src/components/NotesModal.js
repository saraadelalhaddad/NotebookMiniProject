import React from "react";
import noteBookStore from "../stores/noteBookStore";
import { useState } from "react";
import Modal from "react-modal";
import { CreatButtonStyled } from "../styles";

const NotesModal = ({ isOpen, closeModal, createNotes }) => {
  const [notes, setNotes] = useState({
    name: "",
  });
  const handleChange = (event) => {
    setNotes({ ...notes, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteBookStore.createNotes(notes);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="notes Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label> notes </label>
            <input
              value={notes.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <CreatButtonStyled type="submit">{createNotes}</CreatButtonStyled>
        </div>
      </form>
    </Modal>
  );
};

export default NotesModal;
