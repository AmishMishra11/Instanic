import { createContext, useContext, useState } from "react";
const NoteContext = createContext(null);

const useNote = () => useContext(NoteContext);

const NoteContextProvider = ({ children }) => {
  const [newNote, setNewNote] = useState([]);

  return (
    <NoteContext.Provider value={{ newNote, setNewNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteContextProvider };
