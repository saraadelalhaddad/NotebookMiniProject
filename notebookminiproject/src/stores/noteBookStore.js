import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class NoteBookStore {
  noteBook = [];
  notes = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      noteBook: observable,
      notes: observable,
      createNoteBook: action,
      createNotes: action,
      fetchNoteBook: action,
      deleteNoteBook: action,
    });
  }

  fetchNoteBook = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.noteBook = response.data;
      this.loading = false;
    } catch (error) {
      console.error("NoteBookStore -> fetchNoteBook -> error", error);
    }
  };
  createNoteBook = async (newNoteBook) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/notebooks/`,
        newNoteBook
      );
      this.noteBook.push(res.data);
    } catch (error) {
      console.log("NoteBookStore -> createNoteBook -> error", error);
    }
  };

  deleteNoteBook = async (notebookId) => {
    try {
      await axios.delete(`http://localhost:8000/notebooks/${notebookId}`);
      this.nootbook = this.nootbook.filter(
        (notebook) => notebook.id !== +notebookId
      );
    } catch (error) {
      console.log("NoteBookStore -> deleteNoteBook -> error", error);
    }
  };

  createNotes = async (newNotes) => {
    try {
      const res = await axios.post(`http://localhost:8000/notes`, newNotes);
      this.notes.push(res.data);
    } catch (error) {
      console.log("noteBookStore -> createNotes -> error", error);
    }
  };

  updateNotes = async (updateNotes) => {
    try {
      const res = await axios.put(`http://localhost:8000/notes`, updateNotes);
      this.notes.put(res.data);
    } catch (error) {
      console.log("noteBookStore -> updateNotes -> error", error);
    }
  };

  createTags = async (newTags) => {
    try {
      const res = await axios.post(`http://localhost:8000/notes`, newTags);
      this.tags.push(res.data);
    } catch (error) {
      console.log("noteBookStore -> createTags -> error", error);
    }
  };
}

const noteBookStore = new NoteBookStore();
noteBookStore.fetchNoteBook();
export default noteBookStore;
