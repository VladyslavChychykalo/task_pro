import { useState } from "react";
import ModalHelp from "../../modal/modalHelp/ModalHelp";
import needHelpImage from "../../../assets/images/needHelpImage.png";
import { ReactComponent as HelpCircleIcon } from "../../../assets/icons/helpCircle.svg";
import styles from "./HelpBlock.module.css";

const HelpBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClickOpen}
        style={{ padding: "0 24px", marginTop: "auto", cursor: "pointer" }}
      >
        <div
          style={{
            backgroundColor: "#1F1F1F",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <img src={needHelpImage} alt="Help" />
          <p className={styles.helpDescription}>
            If you need help with
            <span>{" TaskPro "}</span>, check out our support resources or reach
            out to our customer support team.
          </p>
          <div className={styles.helpButtonBlock}>
            <HelpCircleIcon />
            <p>Need help?</p>
          </div>
        </div>
      </div>
      <ModalHelp open={isOpen} onCloseModal={handleClose} />
    </>
  );
};

export default HelpBlock;
