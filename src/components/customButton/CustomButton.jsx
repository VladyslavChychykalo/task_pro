import { Button } from "@mui/material";

const CustomButton = ({
  children,
  disabled = false,
  onClick,
  styleOptions = {},
}) => {
  return (
    <Button
      onClick={onClick}
      fullWidth
      // disabled={disabled}
      sx={{
        fontFamily: "Poppins, sans-serif",
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        background: "#BEDBB0",
        height: "49px",
        borderRadius: "8px",
        color: "#161616",
        marginTop: "40px",
        letterSpacing: "-0.02em",
        fontSize: "14px",
        lineHeight: "21px",
        fontWeight: "500",
        "&:hover": {
          background: "#BEDBB0",
        },
        // "&:disabled": {
        //   // background: "#cccccc",
        //   // filter: "grayscale(100%)",
        // },
        ...styleOptions,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
