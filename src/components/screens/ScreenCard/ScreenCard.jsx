import { ReactComponent as RemoveIcon } from "../../../assets/icons/removeIcon.svg";
import ModalCard from "../../modal/modalCard/ModalCard";
import Divider from "@mui/material/Divider";
import styles from "./ScreenCard.module.scss";

const ScreenCard = ({
  title,
  description,
  label,
  handleDeleteCard,
  handleUpdateCard,
}) => {
  return (
    <li className={`${styles.cardWrapper} ${styles[`status-border-${label}`]}`}>
      <h4>{title}</h4>
      <p>{description}</p>

      <Divider
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
          marginTop: "14px",
          marginBottom: "14px",
        }}
      />

      <div className={styles.additionalBlockWrapper}>
        <div className={styles.priorityBlock}>
          <p>Priority</p>
          <p className={styles.labelText}>
            <div className={styles[`status-${label}`]} />
            {label === "none" ? "without" : label}
          </p>
        </div>
        {/* date */}
        <div></div>
        <div className={styles.btnsWrapper}>
          <RemoveIcon onClick={handleDeleteCard} />
          <ModalCard
            initialValue={{ title, description, label }}
            type="edit"
            onUpdateCard={(cardValue) => handleUpdateCard(cardValue)}
          />
        </div>
      </div>
    </li>
  );
};

export default ScreenCard;
