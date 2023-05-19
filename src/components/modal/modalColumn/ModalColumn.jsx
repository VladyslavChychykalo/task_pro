import { useState } from "react";
import Modal from "../Modal";
import CustomButton from "../../customButton/CustomButton";
import CustomInput from "../../customInput/CustomInput";
import ButtonCreate from "../../customButton/buttonCreate/ButtonCreate";
import styles from "./ModalColumn.module.css";

const ModalColumn = ({ onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [columnName, setColumnName] = useState("");

  const reset = () => {
    setColumnName("");
    setOpen(false);
  };

  return (
    <>
      <CustomButton
        styleOptions={{
          background: "#121212",
          color: "#fff",
          "&:hover": { background: "#121212" },
          minWidth: "334px",
          maxWidth: "334px",
          height: "56px",
          marginTop: "0px",
        }}
        onClick={() => setOpen(true)}
      >
        <ButtonCreate
          stylesOptions={{
            background: "#fff",
            marginRight: "8px",
            minWidth: "28px",
            height: "28px",
            padding: "0px",
          }}
          className={styles.buttonCreate2}
        />
        Add another column
      </CustomButton>

      <Modal open={open} reset={reset} title="Add column">
        <CustomInput
          label="Title"
          value={columnName}
          onChange={setColumnName}
        />
        <CustomButton
          onClick={() => {
            onUpdate(columnName);
            reset();
          }}
        >
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

export default ModalColumn;
