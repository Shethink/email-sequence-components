import React, { useState } from "react";

import { FormControlLabel, sliderClasses } from "@mui/material";
import { StyleSwitch } from "./style";
import { SwitchClass } from "./style";
import classNames from "classnames";

interface SwitchProps {
  label?: string;
  checkedIcon?: React.ReactNode;
  ischecked: boolean;
  onClick: (ischecked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, ischecked, onClick }) => {
  const toggleChecked = () => {
    onClick(!ischecked);
  };

  return (
    <FormControlLabel
      control={
        <StyleSwitch
          checked={ischecked}
          onChange={() => toggleChecked()}
          name="custom-switch"
          color="primary"
          classes={{
            root: classNames(SwitchClass.root),
          }}
        />
      }
      label={label}
    />
  );
};

export default Switch;

// Switch
