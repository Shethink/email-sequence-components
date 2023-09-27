import React, { ChangeEvent, InputHTMLAttributes } from "react";
import {
  CheckboxContainer,
  CheckboxIconContainer,
  CheckboxLabel,
  CheckboxList,
  StyledCheckbox,
} from "./styles";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "checked" | "onChange"
> & {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: JSX.Element;
};

const Checkbox = ({ isChecked, onChange, icon, ...props }: CheckboxProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(e.target.checked);

  return (
    <CheckboxContainer>
      <CheckboxList>
        <CheckboxLabel>
          <StyledCheckbox type="checkbox" />
          <CheckboxIconContainer>{icon}</CheckboxIconContainer>
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
