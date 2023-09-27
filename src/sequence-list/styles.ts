import { styled } from "@mui/material/styles";
import { colours } from "../theme-provider";

export const ListWrapper = styled("div")(() => ({
  border: `1px solid ${colours.white500}`,
  width: "100%",
  borderRadius: "4px",
  padding: "1rem",
}));
