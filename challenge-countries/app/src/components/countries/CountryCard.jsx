import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

function CountryCard({ flags, countryName, region, population, capital }) {
  //write code here

  return (
    <Box>
      <Card sx={{ height: 300, pb: 3 }}>
        <CardMedia
          component="img"
          src={flags.png}
          alt={flags.alt}
          height={150}
        />
        <CardHeader
          title={<Typography variant="h6">{countryName}</Typography>}
        />
        <CardContent>
          <Typography variant="body1">
            <strong>region: </strong> {region}
          </Typography>
          <Typography variant="body1">
            <strong>capital: </strong> {capital}
          </Typography>
          <Typography variant="body1">
            <strong>population: </strong> {population}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CountryCard;
