export const filterReducre = (stateFilter, actionFilter) => {
  switch (actionFilter.type) {
    case "SEARCH":
      return { ...stateFilter, search: actionFilter.payload };
    case "SORTING":
      return { ...stateFilter, sorting: actionFilter.payload };
    case "LABELS":
      return { ...stateFilter, filterLables: actionFilter.payload };

    case "CLEAR":
      return {
        ...stateFilter,
        search: "",
        sorting: "",
        filterLables: "",
      };

    default:
      return stateFilter;
  }
};
