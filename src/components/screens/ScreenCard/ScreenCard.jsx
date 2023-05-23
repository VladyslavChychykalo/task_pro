import { ReactComponent as RemoveIcon } from "../../../assets/icons/removeIcon.svg";
import styles from "./ScreenCard.module.scss";

const ScreenCard = ({ title, description, label }) => {
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
      </div>
    </li>
  );
};

export default ScreenCard;
