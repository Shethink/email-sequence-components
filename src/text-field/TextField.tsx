import React, { ChangeEvent, ComponentProps } from "react";
import { Input, inputClasses } from "./styles";
import classNames from "classnames";

type Variant = "outlined" | "contained";

export type InputProps = Omit<ComponentProps<typeof Input>, "onChange"> & {
  variant: Variant;
  onChange?: (value: string) => void;
};

const TextField: React.FC<InputProps> = ({ variant, onChange, ...props }) => {
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => onChange && onChange(event.target.value);

  return (
    <Input
      {...props}
      className={classNames(
        variant === "outlined" && inputClasses.outlined,
        variant === "contained" && inputClasses.contained
      )}
      onChange={handleChange}
    />
  );
};

export default TextField;
