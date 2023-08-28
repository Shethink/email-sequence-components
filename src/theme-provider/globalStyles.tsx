import React from "react";
import { GlobalStyles, tableCellClasses } from "@mui/material";

export const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      [`${theme.breakpoints.up(1024)}`]: {
        html: {
          fontSize: "1.125rem"
        }
      },
      [`.${tableCellClasses.head}, .${tableCellClasses.body}`]: {
        fontSize: "16px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "18px"
        }
      },
      "@media(hover: hover)": {
        "*": {
          scrollbarColor: "#c2c2c2 transparent",
          scrollbarWidth: "thin"
        },
        /* width */
        "::-webkit-scrollbar": {
          width: "6px"
        },
        /* Track */
        "::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 0 transparent"
        },
        /* Handle */
        "::-webkit-scrollbar-thumb": {
          background: "#c2c2c2",
          borderRadius: "10px"
        }
      }
    })}
  />
);
