import { TextField } from "@mui/material";

const CustomInput = ({
  value,
  onChange = () => null,
  label = "",
  multiline = false,
  options = {},
  name = "",
}) => {
  return (
    <TextField
      sx={{
        backgroundColor: "#1F1F1F",
        opacity: "0.4",

        "& label.Mui-focused": {
          color: "#fff",
        },

        "& .MuiInputBase-input": {
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
        },
        "& .MuiFormLabel-root": {
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
        },

        "& .MuiInputBase-root": {
          borderRadius: "8px",
        },

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#BEDBB0",
          },
          "&:hover fieldset": {
            borderColor: "#BEDBB0",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#BEDBB0",
          },
        },
      }}
      autoFocus
      margin="dense"
      id="title"
      label={label}
      name={name}
      type="text"
      fullWidth
      variant="outlined"
      multiline={multiline}
      value={value}
      onChange={onChange}
      {...options}
    />
  );
};

export default CustomInput;
