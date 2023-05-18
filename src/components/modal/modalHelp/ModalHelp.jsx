import React from "react";
import Modal from "../Modal";
import CustomInput from "../../customInput/CustomInput";

const ModalHelp = ({ open, onCloseModal }) => {
//   const [email, setEmai] = useState("");
//   const [titleBoard, setTitleBoard] = useState("");

  const reset = () => {
    onCloseModal();
  };

  return (
    <Modal open={open} title="Need help" reset={reset}>
      <CustomInput label="Email address" />
      <CustomInput label="Comment" multiline={true} options={{ rows: 5 }} />
    </Modal>
  );
};

export default ModalHelp;
