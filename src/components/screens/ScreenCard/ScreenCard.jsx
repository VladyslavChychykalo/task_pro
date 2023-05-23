import { ReactComponent as RemoveIcon } from "../../../assets/icons/removeIcon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/editIcon.svg";
import styles from "./ScreenCard.module.scss";

const ScreenCard = ({ title, description, label, handleDeleteCard }) => {
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
          <EditIcon />
        </div>
      </div>
    </li>
  );
};

export default ScreenCard;
