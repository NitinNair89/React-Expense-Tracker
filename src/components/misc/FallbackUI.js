import { Box } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";

const FallbackUI = ({ message, type }) => {
  return (
    <Box component="div" marginTop={2} role="alert" aria-live="polite">
      <Alert severity={type}>{message}</Alert>
    </Box>
  );
};

export default FallbackUI;
