import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();
const SearchContextProvider = ({ children }) => {
  const [region, setRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  //* we need to delete this later
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  const sharedValues = { region, setRegion, searchQuery, setSearchQuery };
  return (
    <SearchContext.Provider value={sharedValues}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
