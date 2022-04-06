const labelFilterFunction = (arrOfData, filterLables) => {
  if (filterLables) {
    const result = arrOfData.filter((item) => item.labels === filterLables);
    return result;
  }

  return arrOfData;
};

export { labelFilterFunction };
