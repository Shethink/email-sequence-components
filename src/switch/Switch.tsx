import React from "react";
import { StyledSwitch } from "./styles";
import { SwitchProps as MUISwitchProps } from "@mui/material/";

export type SwitchProps = Omit<MUISwitchProps, "checked" | "onChange"> & {
  isActive: boolean;
  onToggle: (status: boolean) => void;
};

const Switch = ({ isActive, onToggle, ...props }: SwitchProps) => {
  return (
    <StyledSwitch
      checked={isActive}
      onChange={(e) => onToggle(e.target.checked)}
      focusVisibleClassName=".Mui-focusVisible"
      {...props}
    />
  );
};

export default Switch;
