import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";
import { colours } from "../theme-provider";

export const CheckboxContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledLabel = styled("label")(() => ({
  cursor: "pointer",
  display: "flex",

  "&::before": {
    content: '""',
    width: "1rem",
    height: "1rem",
    borderRadius: "3px",
    border: `2px solid ${colours.primary}`,
    transition: ".5s ease",
    marginRight: ".5rem",
  },

  "&:hover": {
    "&::before": {
      transform: "scale(1.05)",
    },
  },
}));

export const StyledCheckbox = styled("input")(() => ({
  position: "absolute",
  opacity: 0,
  cursor: "pointer",

  "&:hover + label::before": {
    transform: "scale(1.05)",
    boxShadow: `${alpha(colours.black, 0.24)} 0px 3px 8px`,
  },

  "&:checked + label::before": {
    background: colours.primary,
    content: '"\\002714"',
    display: "flex",
    justifyContent: "center",
    color: colours.white,
    alignItems: "center",
    fontSize: ".6rem",
  },
}));
