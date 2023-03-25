import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { SearchContext } from "../context/searchContext";
import ShowError from "../ShowError";
import Spinner from "../Spinner";
import CountryCard from "./CountryCard";

function AllCountries() {
  //write code here
  const { region, searchQuery } = useContext(SearchContext);
  const countriesEndPoint = searchQuery
    ? `name/${searchQuery}`
    : region !== "all"
    ? `region/${region}`
    : "all";

  const { isLoading, error, data, performFetch } = useFetch(
    `https://restcountries.com/v3.1/${countriesEndPoint}?fields=name,capital,population,flags,region`
  );

  useEffect(() => {
    performFetch();
  }, [countriesEndPoint]);

  return (
    <Box>
      {isLoading && <Spinner />}
      {error && <ShowError error={error} />}
      {data && (
        <Grid container spacing={3}>
          {data.map((country, index) => {
            const { name, population, flags, capital, region } = country;
            return (
              <Grid item key={index} md={3}>
                <CountryCard
                  region={region}
                  countryName={name.official}
                  flags={flags}
                  population={population}
                  capital={capital}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default AllCountries;
