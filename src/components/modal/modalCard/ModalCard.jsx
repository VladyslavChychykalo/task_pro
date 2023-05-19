import { useState } from "react";
import Modal from "../Modal";
import ButtonCreate from "../../customButton/buttonCreate/ButtonCreate";
import CustomButton from "../../customButton/CustomButton";
import CustomInput from "../../customInput/CustomInput";
import ColorPicker from "../../colorPicker/ColorPicker";
import styles from "./ModalCard.module.css";
import "./RadioStyles.scss";

const ModalCard = () => {
  const [open, setOpen] = useState(false);

  const reset = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomButton
        styleOptions={{
          marginTop: "14px",
        }}
        onClick={() => setOpen(true)}
      >
        <ButtonCreate
          stylesOptions={{
            background: "#161616",
            marginRight: "8px",
            minWidth: "28px",
            height: "28px",
            padding: "0px",
          }}
          className={styles.buttonCreate2}
        />
        Add another card
      </CustomButton>

      <Modal open={open} reset={reset} title="Add card">
        <CustomInput label="Title" />
        <CustomInput
          label="Description"
          multiline={true}
          options={{ rows: 6 }}
        />
        {/* == */}
        <ColorPicker />
      </Modal>
    </>
  );
};

export default ModalCard;
