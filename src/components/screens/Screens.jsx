import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ModalColumn from "../modal/modalColumn/ModalColumn";
import ModalCard from "../modal/modalCard/ModalCard";
import styles from "./Screens.module.css";

const Screens = ({ board }) => {
  const { columns = [] } = board;

  const [boardColumns, setBoardColumns] = useState(columns);

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
              <ModalCard />
            </div>
          );
        })}
        <ModalColumn onUpdate={handleCreateColumn} />
      </div>
    </div>
  );
};

export default Screens;
