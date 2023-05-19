import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ name = "", onChange = () => null, value }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Label color</p>
      <div style={{ display: "flex" }}>
        <div>
          <input
            onChange={onChange}
            value="low"
            type="radio"
            name={name}
            id="blue"
            checked={value === "low"}
          />
          <div>
            <label className={styles["blue"]} for="blue">
              <span className={styles["blue-t"]}></span>
            </label>
          </div>
        </div>

        <div>
          <input
            onChange={onChange}
            value="medium"
            type="radio"
            name={name}
            id="red"
            checked={value === "medium"}
          />
          <div>
            <label className={styles["red"]} for="red">
              <span className={styles["red-t"]}></span>
            </label>
          </div>
        </div>

        <div>
          <input
            onChange={onChange}
            value="high"
            type="radio"
            name={name}
            id="green"
            checked={value === "high"}
          />
          <div>
            <label className={styles["green"]} for="green">
              <span className={styles["green-t"]}></span>
            </label>
          </div>
        </div>

        <div>
          <input
            onChange={onChange}
            value="none"
            type="radio"
            name={name}
            id="none"
            checked={value === "none"}
          />
          <div>
            <label className={styles["none"]} for="none">
              <span className={styles["none-t"]}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
