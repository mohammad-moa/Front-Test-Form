import React, { useId } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { InputProps } from "../../types";

const InputForm: React.FC<InputProps> = (props) => {
  const {
    type,
    label,
    width,
    name,
    placeHolder,
    errorText,
    isError,
    value,
    onChange,
  } = props;

  const customId = useId();

  return (
    <FormControl
      fullWidth
      error={isError}
      color="primary"
      sx={{ mt: 4, width: width }}
    >
      <InputLabel htmlFor={customId}>{label}</InputLabel>
      <OutlinedInput
        required
        type={type}
        id={customId}
        label={label}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        sx={{ borderRadius: 4 }}
        dir="rtl"
      />
      {isError ? (
        <FormHelperText error id={customId} sx={{ mt: 1 }}>
          {errorText}
        </FormHelperText>
      ) : (
        ""
      )}
    </FormControl>
  );
};

export default InputForm;
