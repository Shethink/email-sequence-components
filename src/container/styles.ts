import { styled } from "@mui/material/styles";
import { colours } from "../theme-provider";

const PREFIX = "Container";

export const classes = {
  fullWidth: `${PREFIX}-fullWidth`,
};

export const Root = styled("div")(() => ({
  /* NOTE: handle iPhone safe area when in landscape mode */
  /*paddingLeft: "env(safe-area-inset-left, 0)",*/
  /*paddingRight: "env(safe-area-inset-right, 0)"*/
  [`&.${classes.fullWidth}`]: {
    width: "100%",
  },
  background: colours.white,
}));
