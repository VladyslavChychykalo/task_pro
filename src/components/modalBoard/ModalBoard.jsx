import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
} from "@mui/material";
// import useModal from "../../hooks/useModal";
import { ReactComponent as CloseModalIcon } from "../../assets/icons/closeModal.svg";
import CustomInput from "../customInput/CustomInput";
import ListOfIcons from "./listOfIcons/ListOfIcons";
import CustomButton from "../customButton/CustomButton";

const ModalBoard = ({ open, onCloseModal, handleBoard }) => {
  //   const { toggle, handleToggle } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [titleBoard, setTitleBoard] = useState("");

  const handleManipulateBoard = () => {
    handleBoard({ iconIndex: activeIndex, title: titleBoard });
    setTitleBoard("");
    onCloseModal();
    setActiveIndex(0)
  };

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
        setTitleBoard("");
        onCloseModal();
        setActiveIndex(0)
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DialogTitle
          sx={{
            fontFamily: "Poppins, sans-serif",
          }}
          color="#fff"
        >
          New Board
        </DialogTitle>
        <IconButton>
          <CloseModalIcon />
        </IconButton>
      </Box>

      <DialogContent>
        <ul>
          <li>
            <CustomInput value={titleBoard} onChange={setTitleBoard} />
          </li>
          <li>
            <ListOfIcons
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </li>
        </ul>

        <CustomButton onClick={handleManipulateBoard} disabled={!titleBoard}>
          Create
        </CustomButton>
      </DialogContent>
    </Dialog>
  );
};

export default ModalBoard;
