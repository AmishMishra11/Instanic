const searchFunction = (arrOfData, search) => {
  if (search) {
    return [...arrOfData].filter(
      (note) =>
        note.noteTitle.toLowerCase().includes(search.toLowerCase()) ||
        note.labels.toLowerCase().includes(search.toLowerCase())
    );
  }
  return arrOfData;
};
export { searchFunction };
