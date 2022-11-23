import { useState } from "react";
import { FormHelperText } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function Input({
  required,
  fullWidth,
  id,
  label,
  name,
  autoComplete,
  autoFocus,
  type,
  onChange,
  inputWrapperClass,
  isInputHasErr,
  helperTextClass,
  errMsg,
  helperText,
  disabled,
  value,
  inputClass,
  sxWrapper,
  onBlur,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      className={inputWrapperClass}
      sx={{ ...sxWrapper, width: "100%" }}
      variant="outlined"
    >
      <InputLabel htmlFor={id} required={required}>
        {label}
      </InputLabel>
      <OutlinedInput
        required={required}
        fullWidth={fullWidth}
        id={id}
        label={label}
        name={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        type={showPassword ? "text" : type}
        disabled={disabled}
        error={isInputHasErr}
        value={value}
        className={inputClass}
        onChange={(e) => onChange(e.target.value)}
        endAdornment={
          type === "password" && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }
        onBlur={onBlur}
      />
      <FormHelperText error={isInputHasErr} className={helperTextClass}>
        {isInputHasErr ? errMsg : helperText}
      </FormHelperText>
    </FormControl>
  );
}
