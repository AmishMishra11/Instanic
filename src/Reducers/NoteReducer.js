export const NoteReducer = (stateNote, actionNote) => {
  switch (actionNote.type) {
    case "SET_NOTE":
      return { ...stateNote, newNote: actionNote.payload };

    case "DISPLAY_NOTE_EDITOR":
      return {
        ...stateNote,
        displayNoteEditor: actionNote.payload.show,
      };

    case "EDIT":
      return {
        ...stateNote,
        currentEditItem: actionNote.payload.noteInfo,
        displayNoteEditor: actionNote.payload.show,
      };

    case "SET_ARCHIVE":
      return { ...stateNote, archiveNotes: actionNote.payload };

    case "SET_TRASH":
      return {
        ...stateNote,
        trashNotes: [...stateNote.trashNotes, actionNote.payload],
      };

    case "DELETE_NOTE":
      return { ...stateNote, trashNotes: actionNote.payload };

    default:
      return stateNote;
  }
};
