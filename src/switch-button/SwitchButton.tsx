import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { FormControlLabel, sliderClasses } from "@mui/material";
import { StyleSwitch } from "./style";
import { sliderClass } from "./style";
import classNames from "classnames";

interface SwitchButtonProps {
  label?: string;
  checkedIcon?: React.ReactNode;
  ischecked: boolean;
  onClick: (ischecked: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  label,
  ischecked,
  onClick,
}) => {
  const [checked, setChecked] = useState(false);

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
            root: classNames(sliderClass.root),
          }}
        />
      }
      label={label}
    />
  );
};

export default SwitchButton;

// SwitchButton
