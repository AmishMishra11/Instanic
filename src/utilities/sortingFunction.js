const sortingFunction = (arrOfData, sorting) => {
  if (sorting === "old") {
    return [...arrOfData].sort((a, b) => b.createdAt - a.createdAt);
  }
  if (sorting === "new") {
    return [...arrOfData].sort((a, b) => a.createdAt - b.createdAt);
  }
  return arrOfData;
};

export { sortingFunction };
