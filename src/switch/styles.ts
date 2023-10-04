import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
import { colours } from "../theme-provider";

export const StyledSwitch = styled(Switch)(({ theme, size }) => ({
  width: size === "small" ? 35 : 50,
  height: size === "small" ? 17 : 26,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",

    "&.Mui-checked": {
      transform: `translateX(${size === "small" ? "18px" : "23px"})`,
      color: colours.white,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },

    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },

    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },

  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: size === "small" ? 13 : 22,
    height: size === "small" ? 13 : 22,
  },

  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
