import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class NoteBookStore {
  noteBook = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      createNoteBook: action,
      createNotes: action,
      fetchNoteBook: action,
    });
  }

  fetchNoteBook = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebook");
      this.noteBook = response.data;
      this.loading = false;
    } catch (error) {
      console.error("NoteBookStore -> fetchNoteBook -> error", error);
    }
  };
  createNoteBook = async (newNoteBook) => {
    try {
      const formData = new FormData();
      for (const key in newNoteBook) formData.append(key, newNoteBook[key]);
      const res = await axios.post(`http://localhost:8000/noteBook/`, formData);
      this.noteBook.push(res.data);
    } catch (error) {
      console.log("NoteBookStore -> createNoteBook -> error", error);
    }
  };

  createNotes = async (newNotes) => {
    try {
      const formData = new FormData();
      for (const key in newNotes) formData.append(key, newNotes[key]);
      const res = await axios.post(`http://localhost:8000/notes`, formData);
      this.notes.push(res.data);
    } catch (error) {
      console.log("noteBookStore -> createNotes -> error", error);
    }
  };
}

const noteBookStore = new NoteBookStore();
noteBookStore.fetchNoteBook();
export default noteBookStore;
