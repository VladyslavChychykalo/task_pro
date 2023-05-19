import styles from "./ColorPicker.module.scss";

const ColorPicker = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Label color</p>
      <div style={{ display: "flex" }}>
        <div>
          <input type="radio" name="color" id="blue" />
          <div>
            <label className={styles["blue"]} for="blue">
              <span className={styles["blue-t"]}></span>
            </label>
          </div>
        </div>

        <div>
          <input type="radio" name="color" id="red" value="red" />
          <div>
            <label className={styles["red"]} for="red">
              <span className={styles["red-t"]}></span>
            </label>
          </div>
        </div>

        <div>
          <input type="radio" name="color" id="green" />
          <div>
            <label class={styles["green"]} for="green">
              <span className={styles["green-t"]}></span>
            </label>
          </div>
        </div>

        <div>
          <input type="radio" name="color" id="none" />
          <div>
            <label class={styles["none"]} for="none">
              <span className={styles["none-t"]}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
