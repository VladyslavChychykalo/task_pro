import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomButton from "../customButton/CustomButton";
import ButtonCreate from "../customButton/buttonCreate/ButtonCreate";
import ModalColumn from "../modal/modalColumn/ModalColumn";
import styles from "./Screens.module.css";

const Screens = ({ board }) => {
  const { columns = [] } = board;

  const [boardColumns, setBoardColumns] = useState(columns);

  // modals
  // const [columnModalStatus, setColumnModalStatus] = useState(false);

  // useEffect(() => {}, []);

  const handleCreateColumn = (columnTitle) => {
    const newColumn = { id: uuidv4(), columnTitle: columnTitle, cards: [] };
    setBoardColumns((prev) => [...prev, newColumn]);
  };

  return (
    <div style={{ color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {board.title}
        <p>Filters</p>
      </div>
      <div
        className={styles.columnsWrapper}
        style={{ padding: "48px 24px 36px" }}
      >
        {boardColumns.map((el) => {
          console.log("el", el);
          const { columnTitle } = el;

          return (
            <div>
              <div className={styles.columnTitleBlock}>
                <h4>{columnTitle}</h4>
                {/* two buttons */}
                <div></div>
                {/*  */}
              </div>

              {/* cardsList */}
              <ul></ul>

              {/* createCardsButton */}
              <CustomButton
                styleOptions={{
                  marginTop: "14px",
                }}
                // onClick={() => setColumnModalStatus(true)}
              >
                <ButtonCreate
                  stylesOptions={{
                    background: "#161616",
                    marginRight: "8px",
                    minWidth: "28px",
                    height: "28px",
                    padding: "0px",
                  }}
                  className={styles.buttonCreate2}
                />
                Add another column
              </CustomButton>
            </div>
          );
        })}
        <ModalColumn onUpdate={handleCreateColumn} />
      </div>

      {/* Modal */}
    </div>
  );
};

export default Screens;
