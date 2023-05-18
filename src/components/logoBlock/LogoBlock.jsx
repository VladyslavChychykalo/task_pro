import styles from "./LogoBlock.module.css";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

const LogoBlock = () => {
  return (
    <div className={styles.logoBlock}>
      <LogoIcon />
      <h1>Task Pro</h1>
    </div>
  );
};

export default LogoBlock;
