import { ReactComponent as RemoveIcon } from "../../../assets/icons/removeIcon.svg";
import ModalCard from "../../modal/modalCard/ModalCard";
import styles from "./ScreenCard.module.scss";

const ScreenCard = ({
  title,
  description,
  label,
  handleDeleteCard,
  handleUpdateCard,
}) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{description}</p>
      <div>
        <div>
          <p>Priority</p>
          <p className={styles.labelText}>
            <div className={styles[`status-${label}`]} />
            {label}
          </p>
        </div>
        {/* date */}
        <div></div>
        <div>
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
