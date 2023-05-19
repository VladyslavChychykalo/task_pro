import { useState } from "react";
import Modal from "../Modal";
import ButtonCreate from "../../customButton/buttonCreate/ButtonCreate";
import CustomButton from "../../customButton/CustomButton";
import CustomInput from "../../customInput/CustomInput";
import ColorPicker from "../../colorPicker/ColorPicker";
import styles from "./ModalCard.module.css";

const ModalCard = ({
  initialValue = { title: "", description: "", label: "none" },
}) => {
  const [open, setOpen] = useState(false);

  const [cardValue, setCardValue] = useState(initialValue);

  const reset = () => {
    setOpen(false);
    setCardValue(initialValue);
  };

  const handleChange = ({ target }) => {
    setCardValue((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
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
        <form onSubmit={() => {}}>
          <CustomInput
            value={cardValue.title}
            name="title"
            label="Title"
            onChange={handleChange}
          />
          <CustomInput
            value={cardValue.description}
            name="description"
            label="Description"
            onChange={handleChange}
            multiline={true}
            options={{ rows: 6 }}
          />
          <ColorPicker
            value={cardValue.label}
            name="label"
            onChange={handleChange}
          />

          <CustomButton type="submit">
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
        </form>
      </Modal>
    </>
  );
};

export default ModalCard;
