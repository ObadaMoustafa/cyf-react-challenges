import { Box, Container, Grid, Typography } from "@mui/material";

function Navbar() {
  //write code here

  return (
    <Box bgcolor="black" py={3}>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h3" color="white">
              logo
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" color="white">
              Dark mode
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Navbar;
