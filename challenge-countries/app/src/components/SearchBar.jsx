import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";
import { useContext } from "react";
import { SearchContext } from "./context/searchContext";
import lodash from "lodash";

function SearchBar() {
  //write code here
  const { setSearchQuery } = useContext(SearchContext);
  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <SearchIcon sx={{ mr: 2 }} fontSize="large" color="primary" />
        <TextField
          label="search by country name"
          variant="filled"
          type="text"
          fullWidth
          onChange={lodash.debounce(handleSearchQuery, 500)}
          id="search-field"
        />
      </Box>
    </>
  );
}

export default SearchBar;
