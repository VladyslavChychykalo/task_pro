import { useState } from "react";
import Modal from "../Modal";
import ButtonCreate from "../../customButton/buttonCreate/ButtonCreate";
import CustomButton from "../../customButton/CustomButton";
import CustomInput from "../../customInput/CustomInput";
import ColorPicker from "../../colorPicker/ColorPicker";
import { ReactComponent as EditIcon } from "../../../assets/icons/editIcon.svg";
import styles from "./ModalCard.module.css";

const ModalCard = ({
  type = "create",
  initialValue = { title: "", description: "", label: "none" },
  onUpdateCard = () => null,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCard(cardValue);
    reset();
  };

  return (
    <>
      {type === "create" ? (
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
      ) : (
        <EditIcon />
      )}

      <Modal
        open={open}
        reset={reset}
        title={type === "create" ? "Add card" : "Edit card"}
      >
        <form onSubmit={handleSubmit}>
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
