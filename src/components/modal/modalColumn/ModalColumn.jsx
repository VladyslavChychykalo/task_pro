import { useState } from "react";
import Modal from "../Modal";
import CustomButton from "../../customButton/CustomButton";
import CustomInput from "../../customInput/CustomInput";
import ButtonCreate from "../../customButton/buttonCreate/ButtonCreate";
import { ReactComponent as EditIcon } from "../../../assets/icons/editIcon.svg";
import styles from "./ModalColumn.module.css";

const ModalColumn = ({ initialValue = "", onUpdate, type = "create" }) => {
  const [open, setOpen] = useState(false);
  const [columnName, setColumnName] = useState(initialValue);

  const reset = () => {
    setColumnName("");
    setOpen(false);
  };

  const handleChange = ({ target }) => {
    setColumnName(target.value);
  };

  return (
    <>
      {type === "create" ? (
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
      ) : (
        <EditIcon onClick={() => setOpen(true)} />
      )}

      <Modal
        open={open}
        reset={reset}
        title={type === "create" ? "Add column" : "Edit column"}
      >
        <CustomInput label="Title" value={columnName} onChange={handleChange} />
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
          {type === "create" ? "Add" : "Edit"}
        </CustomButton>
      </Modal>
    </>
  );
};

export default ModalColumn;
