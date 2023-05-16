import { TextField } from "@mui/material";

const CustomInput = ({ value, onChange }) => {
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
      label="Title"
      type="text"
      fullWidth
      variant="outlined"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default CustomInput;
