import React from "react";
import Select from "react-select/";

const CustomSelect = ({ onChange, disabled }) => {
  const options = [
    { value: "", label: "Choose an algorithm", isDisabled: true },
    { value: "Bubble Sort", label: "Bubble Sort" },
    { value: "Selection Sort", label: "Selection Sort" },
    { value: "Merge Sort", label: "Merge Sort" },
  ];

  const styles = {
    control: (styles) => ({
      ...styles,
      borderRadius: 5,
      border: "1px solid gray",
      cursor: "pointer",
    }),
    option: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
  };

  return (
    <Select
      styles={styles}
      onChange={onChange}
      value={options.value}
      options={options}
      defaultValue={options[0]}
      isDisabled={disabled}
      isSearchable={false}
    />
  );
};

export default CustomSelect;
