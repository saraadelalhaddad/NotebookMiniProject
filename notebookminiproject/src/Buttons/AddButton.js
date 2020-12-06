import React from "react";
import NoteBookModal from "../components/NoteBookModal";
import { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AiOutlineFileAdd
        className="float-right"
        size="2em"
        onClick={openModal}
      />
      <NoteBookModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
