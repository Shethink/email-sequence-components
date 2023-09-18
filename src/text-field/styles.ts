import { styled } from "@mui/material/styles";
import { colours } from "../theme-provider";

const PREFIX = "Input";

export const inputClasses = {
  outlined: `${PREFIX}-outlined`,
  contained: `${PREFIX}-contained`,
};

export const Input = styled("input")(() => ({
  height: "30px",
  width: "100%",
  borderRadius: "3px",
  paddingLeft: "6px",
  color: colours.black200,

  "&:focus": {
    outline: "none",
  },

  [`&.${inputClasses.outlined}`]: {
    border: `1px solid ${colours.white500}`,
    background: colours.white,
  },

  [`&.${inputClasses.contained}`]: {
    border: `1px solid ${colours.white500}`,
    background: colours.white500,
  },
}));
