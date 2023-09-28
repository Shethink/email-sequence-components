import React, {
  CSSProperties,
  ChangeEvent,
  InputHTMLAttributes,
  useState,
} from "react";
import {
  CheckboxContainer,
  CheckboxIconContainer,
  CheckboxLabel,
  CheckboxList,
  StyledCheckbox,
} from "./styles";
import { log } from "console";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "checked" | "onChange"
> & {
  isChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: JSX.Element;
  styles?: CSSProperties;
};

const Checkbox = ({
  isChecked,
  styles,
  onChange,
  icon,
  checked,
  ...props
}: CheckboxProps) => {
  const handleCheck = (e: boolean) => {
    console.log(e, "sd");
    onChange && onChange(e);
  };

  return (
    <CheckboxContainer>
      <CheckboxList>
        <CheckboxLabel>
          <StyledCheckbox type="checkbox" />
          <CheckboxIconContainer
            style={{ ...styles }}
            className={`${checked && "backgroundstyle"}`}
            onClick={() => handleCheck(!checked)}
          >
            {checked ? icon : ""}
          </CheckboxIconContainer>
        </CheckboxLabel>
      </CheckboxList>
    </CheckboxContainer>
    // <StyledCheckbox
    //   type="checkbox"
    //   checked={isChecked}
    //   onChange={handleCheck}
    //   {...props}
    // />
  );
};

export default Checkbox;
