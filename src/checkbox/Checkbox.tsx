import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { CheckboxContainer, StyledLabel, StyledCheckbox } from "./styles";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "checked" | "onChange"
> & {
  label?: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox = ({ isChecked, onChange, label, ...props }: CheckboxProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(e.target.checked);

  return (
    <CheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        name=""
        checked={isChecked}
        onChange={handleCheck}
        id="checkbox-primary"
        {...props}
      />
      <StyledLabel htmlFor="checkbox-primary">{label}</StyledLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
