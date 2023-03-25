import { Box, MenuItem, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { SearchContext } from "../context/searchContext";
import ShowError from "../ShowError";
import Spinner from "../Spinner";
import { getRegionArrayForMUI } from "./filterFunctions";

function SelectRegion() {
  //write code here
  const [regions, setRegions] = useState(null);
  const { setRegion, setSearchQuery } = useContext(SearchContext);
  const { isLoading, error, performFetch, data } = useFetch(
    "https://restcountries.com/v3.1/all?fields=region"
  );

  useEffect(() => {
    performFetch();
  }, []);

  useEffect(() => {
    if (data) {
      setRegions(getRegionArrayForMUI(data));
    }
  }, [data]);

  function handleChooseRegion(e) {
    setRegion(e.target.value);
    setSearchQuery("");
  }

  return (
    <Box width="100%">
      {error && <ShowError error={error} />}
      {isLoading && <Spinner />}
      {regions && (
        <TextField
          id="outlined-select-currency"
          select
          label="filter by region"
          defaultValue="EUR"
          helperText="Please select your currency"
          onChange={handleChooseRegion}
          fullWidth
        >
          {regions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Box>
  );
}

export default SelectRegion;
