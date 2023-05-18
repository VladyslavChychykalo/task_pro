import CustomButton from "../customButton/CustomButton";
import ButtonCreate from "../customButton/buttonCreate/ButtonCreate";
import styles from "./Screens.module.css";

const Screens = (props) => {
  console.log("props", props);
  return (
    <div style={{ color: "#fff", padding: "48px 24px 36px" }}>
      <CustomButton
        styleOptions={{
          background: "#121212",
          color: "#fff",
          "&:hover": { background: "#121212" },
          maxWidth: "334px",
          marginTop: "0px",
        }}
      >
        <ButtonCreate
          stylesOptions={{
            background: "#fff",
            marginRight: "8px",
            minWidth: "28px",
            height: "28px",
            padding: "0px",
          }}
          className={styles.buttonCreate}
        />
        Add another column
      </CustomButton>
      {props.board.title}
    </div>
  );
};

export default Screens;
