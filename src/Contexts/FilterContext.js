import { createContext, useContext, useReducer } from "react";

import { filterReducre } from "../Reducers/FilterReducer";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const FilterContextProvider = ({ children }) => {
  const [stateFilter, dispatchFilter] = useReducer(filterReducre, {
    search: "",
    sorting: "",
    filterLables: "",
  });

  return (
    <FilterContext.Provider value={{ stateFilter, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterContextProvider };
