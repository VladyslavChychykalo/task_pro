import {
  Dialog,
  Box,
  DialogTitle,
  IconButton,
  DialogContent,
} from "@mui/material";
import { ReactComponent as CloseModalIcon } from "../../assets/icons/closeModal.svg";

const Modal = ({ open = false, reset = () => null, title = "", children }) => {
  return (
    <Dialog
      fullWidth={true}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#151515",
          borderRadius: "8px",
          maxWidth: "350px",
        },
      }}
      open={open}
      onClose={() => {
        reset();
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DialogTitle
          sx={{
            fontFamily: "Poppins, sans-serif",
          }}
          color="#fff"
        >
          {title}
        </DialogTitle>
        <IconButton
          onClick={() => {
            reset();
          }}
        >
          <CloseModalIcon />
        </IconButton>
      </Box>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
