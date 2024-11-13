export const select = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    borderRadius: "5px",
    color: "rgb(118, 118, 118)",
    width: "312px",
    height: "42px",
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
    fontFamily: "inherit",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
    "&:active": {
      backgroundColor: "#f5f5f5",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#6f6f6f",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6f6f6f",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#6f6f6f",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "5px",
    backgroundColor: "#fff",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#fff" : "#fff",
    color: "#6f6f6f",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  }),
};
