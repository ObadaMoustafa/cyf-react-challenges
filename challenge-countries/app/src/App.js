import { Box, Container, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";
import SearchContextProvider from "./components/context/searchContext";
import AllCountries from "./components/countries/AllCountries";
import SelectRegion from "./components/filter-countries/SelectRegion";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/SearchBar";
import { darkTheme, lightTheme } from "./theme/mode";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Box bgcolor="background.default" minHeight="100vh">
        <Navbar setIsLightTheme={setIsLightTheme} />
        <Container>
          <SearchContextProvider>
            <Grid container my={3} columnSpacing={3}>
              <Grid item md={6}>
                <SearchBar />
              </Grid>
              <Grid item md={6}>
                <SelectRegion />
              </Grid>
            </Grid>
            <AllCountries />
          </SearchContextProvider>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
