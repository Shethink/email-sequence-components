import { styled } from "@mui/material/styles";
import { colours } from "../theme-provider";
import { Typography } from "@mui/material";

const SequencePhaseContainerClassesPrefix = "SequencePhaseContainerClasses";

export const sequencePhaseContainerClasses = {
  margin: `${SequencePhaseContainerClassesPrefix}-marginalised`,
};

export const ListWrapper = styled("div")({
  border: `1px solid ${colours.white500}`,
  width: "100%",
  borderRadius: "4px",
  padding: "1rem",
  cursor: "pointer",
  transition: ".2s ease-in",

  "&:hover": {
    background: colours.white100,
  },
});

export const SequenceBasicDetails = styled("div")({
  flex: 1,
  borderRight: `1px dashed ${colours.black800}`,
  paddingLeft: ".5rem",
});

export const SequenceGeneralData = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: ".3rem",
  fontWeight: "normal",
  fontSize: ".8rem",
}));

export const SequencePhaseContainer = styled("div")(({ theme }) => ({
  minWidth: "calc(100% / 6)",
  maxWidth: "calc(100% / 3)",

  [`&.${sequencePhaseContainerClasses.margin}`]: {
    marginRight: "10px",
  },
}));

export const SequqncePhaseTitle = styled(Typography)({
  color: colours.white800,
  fontSize: ".6rem",
});

export const AdditionalDataContainer = styled("section")(({ theme }) => ({
  width: "25%",
  padding: "0 1rem",
  borderRight: `1px dashed ${colours.black800}`,

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const SequenceMetrics = styled("section")(({ theme }) => ({
  width: "45%",
  padding: "0 1rem",
  borderRight: `1px dashed ${colours.black800}`,

  [theme.breakpoints.down("lg")]: {
    width: "55%",
  },
}));
