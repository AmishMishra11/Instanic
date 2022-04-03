import { createContext, useContext, useState, useEffect } from "react";
import { loadNewNotes } from "../Call-Apis/loadNewNotes";
const NoteContext = createContext(null);

const useNote = () => useContext(NoteContext);

const NoteContextProvider = ({ children }) => {
  // useEffect(() => {
  //   loadNewNotes();
  // }, []);

  const [newNote, setNewNote] = useState([]);

  return (
    <NoteContext.Provider value={{ newNote, setNewNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteContextProvider };
