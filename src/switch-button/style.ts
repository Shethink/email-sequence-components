import { Switch, SwitchClasses } from "@mui/material";
import { styled } from "@mui/system";
import { colours } from "src/theme-provider";

const PREFIX = "Switch";

export const SwitchClass = {
  root: `${PREFIX}-root`,
  thumb: `${PREFIX}-thumb`,
};

export const StyleSwitch = styled(Switch)(({ theme }) => ({
  [`&.${SwitchClass.root}`]: {
    borderRadius: 25,
    padding: 0,
    width: 40,
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    transition: "background-color 0.3s",
    backgroundColor: "#cacacc",
    justifyContent: "center",
    height: 22,
    "&:hover": {
      backgroundColor: "#737373",
    },
  },
  "& .MuiSwitch-switchBase": {
    width: 16,
    height: 16,
    left: 2,
    top: 2,
    right: 0,
    position: "absolute",

    backgroundColor: colours.white100,

    transitionDuration: "700ms",

    "&.Mui-checked": {
      transform: "translateX(18px)",

      "& + .MuiSwitch-track": {
        opacity: 1,

        backgroundColor:
          theme.palette.mode === "dark" ? colours.primary : "#146ef6",
      },
      "& .MuiSwitch-thumb": {
        zIndex: 1,
      },
      "&:hover": {
        backgroundColor: colours.white100,
      },
    },
  },
}));
