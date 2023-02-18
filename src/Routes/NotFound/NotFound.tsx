import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Theme, Typography } from "@mui/material";
import Colors from "../../Colors";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.secondary,
    },
  };
});
const NotFound = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h3">404 Not Found</Typography>
    </Box>
  );
};

export default NotFound;
