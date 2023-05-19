import { useState } from "react";
import CustomInput from "../../customInput/CustomInput";
import CustomButton from "../../customButton/CustomButton";
import ButtonCreate from "../../customButton/buttonCreate/ButtonCreate";
import ListOfIcons from "./listOfIcons/ListOfIcons";
import Modal from "../Modal";
import styles from "./ModalBoard.module.css";

const ModalBoard = ({ handleBoard }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [titleBoard, setTitleBoard] = useState("");

  const reset = () => {
    setTitleBoard("");
    setOpen(false);
    setActiveIndex(0);
  };

  const handleManipulateBoard = () => {
    handleBoard({ iconIndex: activeIndex, title: titleBoard });
    reset();
  };

  return (
    <>
      <ButtonCreate
        onClick={() => {
          setOpen(true);
        }}
      />
      
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
          <ButtonCreate
            stylesOptions={{
              background: "#161616",
              marginRight: "8px",
              minWidth: "28px",
              height: "28px",
              padding: "0px",
            }}
            className={styles.buttonCreate}
          />
          Create
        </CustomButton>
      </Modal>
    </>
  );
};

export default ModalBoard;
