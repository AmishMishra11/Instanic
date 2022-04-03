import { createContext, useContext, useReducer } from "react";
import { NoteReducer } from "../Reducers/NoteReducer";
const NoteContext = createContext(null);

const useNote = () => useContext(NoteContext);

const NoteContextProvider = ({ children }) => {
  const [stateNote, dispatchNote] = useReducer(NoteReducer, {
    newNote: [],
    displayNoteEditor: false,
    currentEditItem: {},
  });

  return (
    <NoteContext.Provider value={{ stateNote, dispatchNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteContextProvider };
