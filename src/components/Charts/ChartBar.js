import React from "react";
import { Box, Typography } from "@material-ui/core";
import "../Charts/ChartBar.css";

const ChartBar = ({ dataPoints }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      marginTop={1.5}
    >
      {dataPoints.map((dp) => (
        <Box
          component="div"
          display="flex"
          flexDirection="column"
          alignItems="center"
          role="presentation"
          key={dp.label}
        >
          <div className="wrapperBar">
            <span className="barStyle" style={{ height: dp.value }}></span>
          </div>
          <Typography component="span">{dp.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChartBar;
