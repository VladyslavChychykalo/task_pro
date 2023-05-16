import { iconsBoard } from "../../../utils/mochas";
import styles from "./ListOfIcons.module.css";

const ListOfIcons = ({ setActiveIndex, activeIndex }) => {
  return (
    <div>
      <p className={styles.blockTitle}>Icons</p>
      <ul className={styles.listIcons}>
        {iconsBoard.map(({ icon: Icon }, index) => {
          return (
            <li key={index} onClick={() => setActiveIndex(index)}>
              <Icon
                className={`${activeIndex === index && styles.activeIcon}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfIcons;
