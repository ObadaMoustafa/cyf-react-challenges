import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

function Navbar({ setIsLightTheme }) {
  //write code here
  function handleChangeTheme() {
    setIsLightTheme((pre) => !pre);
  }
  return (
    <Box bgcolor="background.nav" py={3}>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h3" color="white">
              logo
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleChangeTheme}>
              <Typography variant="h3" color="white">
                change theme mode
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Navbar;
