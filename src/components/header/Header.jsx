import styles from "./Header.module.scss";
import profilePhoto from "../../assets/images/profilePhoto.png";

const Header = ({ name = "Ivetta", photo = profilePhoto }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.headerTitle}>Project office</h2>
      <div className={styles.userInfoBlock}>
        {/* <p></p> */}
        <p>Ivetta</p>
        <img src={photo} alt="Profile" />
      </div>
    </div>
  );
};

export default Header;
