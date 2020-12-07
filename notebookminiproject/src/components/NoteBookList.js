import AddButton from "../Buttons/AddButton";
import noteBookStore from "../stores/noteBookStore";
import NoteBookItem from "./NoteBookItem";
import { observer } from "mobx-react";
import DeleteButton from "../Buttons/DeleteButton";

const NoteBookList = ({ noteBook }) => {
  const noteBooks = noteBookStore.noteBook.map((_noteBook) => (
    <NoteBookItem noteBook={_noteBook} />
  ));

  return (
    <>
      {noteBooks}
      <AddButton />
      {/* <DeleteButton notebookId={noteBook.id} /> */}
    </>
  );
};

export default observer(NoteBookList);
