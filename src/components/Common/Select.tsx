import React, { useId } from "react";
import { FormControl, InputLabel, Select } from "@mui/material";
import { SelectProps } from "../../types";

const SelectForm: React.FC<SelectProps> = (props) => {
  const { label, width, value, onChange, children } = props;

  const customId = useId();

  return (
    <FormControl fullWidth color="primary" sx={{ mt: 4, width: width }}>
      <InputLabel id={customId}>{label}</InputLabel>
      <Select
        required
        id={customId}
        label={label}
        value={value}
        onChange={onChange}
        sx={{ borderRadius: 4, textAlign: "left" }}
        dir="rtl"
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectForm;
