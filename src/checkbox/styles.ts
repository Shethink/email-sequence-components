import { styled } from "@mui/material/styles";
import { colours } from "../theme-provider";

export const CheckboxContainer = styled("ul")(() => ({
  position: "relative",
  margin: 0,
  padding: 0,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  border: `3px solid #000`,
  borderRadius: "10px",
  pddding: "20px 0",
  boxSizing: "border-box",
  overflow: "hidden",
  width: "100px",
  // background: "linear-gradient(0deg, #fff, #fefeff)",

  "&::before": {
    position: "absolute",
    content: '""',
    width: "100%",
    height: "100%",
    background: "rgba(255, 0, 0, 0.05)",
    bottom: "-50%",
    pointerEvents: "none",
    zIndex: 1,
  },
}));

export const CheckboxList = styled("li")(() => ({
  // listStyle: "ethiopic-halehame-om-et",
  position: "relative",
  listStyle: "none",

  textAlign: "center",
  margin: "15px",
}));

export const CheckboxLabel = styled("label")(() => ({
  position: "relative",
}));

export const StyledCheckbox = styled("input")(() => ({
  position: "absolute",
  opacity: 0,
  cursor: "pointer",
}));

export const CheckboxIconContainer = styled("div")(() => ({
  width: "60px",
  height: "60px",
  color: colours.white500,
  background: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #000",
  borderRadius: "10px",
  transition: ".5s",
  [`&.backgroundstyle`]: {
    background: colours.primary,
  },
}));
