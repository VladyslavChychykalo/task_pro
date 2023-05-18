import { useState } from "react";
import CustomInput from "../../customInput/CustomInput";
import CustomButton from "../../customButton/CustomButton";
import ListOfIcons from "./listOfIcons/ListOfIcons";
import Modal from "../Modal";

const ModalBoard = ({ open, onCloseModal, handleBoard }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [titleBoard, setTitleBoard] = useState("");

  const reset = () => {
    setTitleBoard("");
    onCloseModal();
    setActiveIndex(0);
  };

  const handleManipulateBoard = () => {
    handleBoard({ iconIndex: activeIndex, title: titleBoard });
    reset();
  };

  return (
    <Modal title="New Board" open={open} reset={reset}>
      <ul>
        <li>
          <CustomInput
            label="Title"
            value={titleBoard}
            onChange={setTitleBoard}
          />
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
    </Modal>
  );
};

export default ModalBoard;
