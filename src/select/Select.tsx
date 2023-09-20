import React, { RefObject } from "react";
import ReactSelect, {
  ActionMeta,
  GroupBase,
  MultiValue,
  OptionProps,
  SingleValue,
  components as SelectComponent,
  StylesConfig,
} from "react-select";
import makeAnimated from "react-select/animated";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { colours } from "../theme-provider";

export type SelectOption = {
  label: string;
  value: string;
};

export interface SelectProps {
  options?: readonly SelectOption[];
  onChange?: (
    value: SingleValue<SelectOption> | MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  isMultiple?: boolean;
  isClearable?: boolean;
  placeholder?: string;
  closeMenuOnSelect?: boolean;
  isDisabled?: boolean;
  isAnimated?: boolean;
  optionComponent?: SelectComponents<
    SelectOption,
    boolean,
    GroupBase<SelectOption>
  >;
  styles?: StylesConfig<SelectOption, boolean, GroupBase<SelectOption>>;
  isInsideModal?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  isMultiple,
  isClearable,
  placeholder,
  closeMenuOnSelect,
  isDisabled,
  isAnimated,
  optionComponent,
  styles,
  isInsideModal,
  onChange,
}) => {
  const animatedComponents = makeAnimated();

  const Option = (props: OptionProps<SelectOption>) => {
    return (
      <div>
        <SelectComponent.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </SelectComponent.Option>
      </div>
    );
  };

  return (
    <ReactSelect
      defaultValue={options?.[0]}
      options={options ?? []}
      isMulti={isMultiple}
      onChange={onChange}
      menuPortalTarget={
        isInsideModal
          ? (document.querySelector(".MuiModal-root") as HTMLElement)
          : document.body
      }
      isClearable={isClearable}
      placeholder={placeholder ?? "Select..."}
      closeMenuOnSelect={closeMenuOnSelect}
      isDisabled={isDisabled}
      components={
        isMultiple
          ? isAnimated
            ? optionComponent ?? animatedComponents
            : { Option }
          : { Option }
      }
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: "13px",
          outline: "none",
          //   borderColor: state.isFocused ? "orange" : "pink",
          //   border: 1,
          //   boxShadow: state.isFocused ? "none" : "0px 1px rgba(0,0,0,0.3)",
        }),

        ...styles,
      }}
    />
  );
};

export default Select;
