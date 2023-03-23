import React from "react";
import { Button, Typography } from "@mui/material";
function FoodButton({ text, onClick, result }) {
  //write code here

  return (
    <div>
      <Button onClick={onClick}>{text}</Button>
      <Typography variant="h3" color="white">
        {result}
      </Typography>
    </div>
  );
}

export default FoodButton;
