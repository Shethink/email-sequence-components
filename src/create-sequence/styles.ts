import { styled } from "@mui/material/styles";
import { Card as MaterialCard } from "@mui/material";
import { colours } from "../theme-provider";

const PREFIX = "Card";

export const cardClasses = {
  root: `${PREFIX}-root`,
};

export const Card = styled(MaterialCard)(() => ({
  [`&.${cardClasses.root}`]: {
    padding: "1.5rem",
    boxShadow: "none",
    border: `1px solid ${colours.black800}`,
    maxWidth: "45%",
    marginBottom: "1.5rem",
    width: "30%",

    "&:hover": {
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
      cursor: "pointer",
    },
  },
}));

export const CreateSequenceCardContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > p": {
    textAlign: "center",
    fontSize: ".7rem",
  },

  "& > h3": {
    fontSize: "1rem",
    margin: "10px 0",
  },
}));

export const CreateSequenceForm = styled("form")(() => ({
  marginTop: "1rem",
}));
