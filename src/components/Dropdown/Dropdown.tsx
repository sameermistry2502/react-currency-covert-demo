import React from "react";
import Select, { components } from "react-select";
import { currency } from "../../config/currency";
import { customStyles } from "./index";

interface DropdownsProps {
  placeholder: string;
  handleChange: (selectedOption: any) => void;
  value: any;
}

// Cast the Option component to a React component type to avoid the TS2786 error.
const OptionComp = components.Option as React.ComponentType<any>;

const OptionComponent: React.FC<any> = (props) => {
  return (
    <OptionComp {...props}>
      <span className={`currency-flag currency-flag-${props.data.value}`} />{" "}
      {props.data.label}
    </OptionComp>
  );
};

const Dropdowns: React.FC<DropdownsProps> = (props) => {
  const { handleChange, placeholder, value } = props;
  const selectValue = currency.find(
    (option) => option.value === value || option.label === value
  );

  return (
    <Select
      options={currency}
      onChange={handleChange}
      placeholder={placeholder}
      styles={customStyles}
      value={selectValue}
      components={{ Option: OptionComponent }}
    />
  );
};

export default Dropdowns;
