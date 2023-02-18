import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Theme, Typography } from "@mui/material";
import Colors from "../../Colors";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: Colors.secondary,
    },
  };
});
const LandingSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h1">Landing Route</Typography>
    </Box>
  );
};

export default LandingSection;
