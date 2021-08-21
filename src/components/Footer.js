import { Box, Icon, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Box textAlign="center" marginTop={2} component="footer" id="footer">
      <Box
        component="div"
        display="flex"
        alignItems="end"
        justifyContent="center"
      >
        <Typography component="span">Made with </Typography>
        <Typography component="span">
          <Icon role="img" aria-label="love">
            favorite
          </Icon>{" "}
        </Typography>
        <Typography component="span">by Nitin</Typography>
      </Box>
      <div>
        <ul role="listbox">
          <li>
            <Typography>
              <a
                href="https://github.com/NitinNair89"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Github
              </a>
            </Typography>
          </li>
          <li aria-hidden="true">
            <span> | </span>
          </li>
          <li>
            <Typography>
              <a
                href="https://www.linkedin.com/in/nitin-nair-11728a144/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                LinkedIn
              </a>
            </Typography>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Footer;
