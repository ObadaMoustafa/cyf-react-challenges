import { Container } from "@mui/material";
import AllCountries from "./components/countries/AllCountries";
import SelectRegion from "./components/filter-countries/SelectRegion";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <SearchBar />
        <SelectRegion />
        <AllCountries />
      </Container>
    </>
  );
}

export default App;
