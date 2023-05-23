import { useState } from "react";
import CustomInput from "../../customInput/CustomInput";
import CustomButton from "../../customButton/CustomButton";
import ButtonCreate from "../../customButton/buttonCreate/ButtonCreate";
import ListOfIcons from "./listOfIcons/ListOfIcons";
import Modal from "../Modal";
import { ReactComponent as EditIcon } from "../../../assets/icons/editIcon.svg";
import styles from "./ModalBoard.module.css";

const ModalBoard = ({
  initialValue = { activeIndex: 0, titleBoard: "" },
  handleBoard,
  type = "create",
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialValue.activeIndex);
  const [titleBoard, setTitleBoard] = useState(initialValue.titleBoard);

  const reset = () => {
    setTitleBoard("");
    setOpen(false);
    setActiveIndex(0);
  };

  const handleManipulateBoard = () => {
    handleBoard({ iconIndex: activeIndex, title: titleBoard });
    reset();
  };

  const handleChange = ({ target }) => {
    setTitleBoard(target.value);
  };

  return (
    <>
      {type === "create" ? (
        <ButtonCreate isButton={true} onClick={() => setOpen(true)} />
      ) : (
        <EditIcon onClick={() => setOpen(true)} />
      )}

      <Modal title="New Board" open={open} reset={reset}>
        <ul>
          <li>
            <CustomInput
              label="Title"
              value={titleBoard}
              onChange={handleChange}
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
          {type === "create" ? "Create" : "Edit"}
        </CustomButton>
      </Modal>
    </>
  );
};

export default ModalBoard;
