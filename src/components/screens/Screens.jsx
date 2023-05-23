import { v4 as uuidv4 } from "uuid";
import ModalColumn from "../modal/modalColumn/ModalColumn";
import ModalCard from "../modal/modalCard/ModalCard";
import ScreenCard from "./ScreenCard/ScreenCard";
import { ReactComponent as RemoveIcon } from "../../assets/icons/removeIcon.svg";
import styles from "./Screens.module.scss";

const Screens = ({ board, handleUpdateMainBoard }) => {
  const { id, columns = [] } = board;

  const handleUpdateInitialBoard = (newColumnData) => {
    handleUpdateMainBoard(id, newColumnData);
  };

  // Columns Actions
  const handleCreateColumn = (columnTitle) => {
    const newArr = [
      ...columns,
      { id: uuidv4(), columnTitle: columnTitle, cards: [] },
    ];
    handleUpdateInitialBoard(newArr);
  };

  const handleDeleteColumn = (columnId) => {
    const newArr = columns.filter((el) => el.id !== columnId);
    handleUpdateInitialBoard(newArr);
  };

  const handleUpdateColumn = ({ columnId, newColumnTitle }) => {
    const newArr = columns.map((el) =>
      el.id === columnId ? { ...el, columnTitle: newColumnTitle } : el
    );

    handleUpdateInitialBoard(newArr);
  };
  // ====

  // Card Actions
  const handleCreateCard = ({ columnId, cardValue }) => {
    const newArr = columns.map((el) =>
      el.id === columnId ? { ...el, cards: [...el.cards, cardValue] } : el
    );

    handleUpdateInitialBoard(newArr);
  };

  const handleDeleteCard = ({ columnId, cardId }) => {
    const newArr = columns.map((el) =>
      el.id === columnId
        ? { ...el, cards: el.cards.filter((cardEl) => cardEl.id !== cardId) }
        : el
    );

    handleUpdateInitialBoard(newArr);
  };

  const handleUpdateCard = ({ columnId, cardId, cardValue }) => {
    const newArr = columns.map((el) =>
      el.id === columnId
        ? {
            ...el,
            cards: el.cards.map((cardEl) =>
              cardEl.id === cardId ? { ...cardEl, ...cardValue } : cardEl
            ),
          }
        : el
    );

    handleUpdateInitialBoard(newArr);
  };

  return (
    <div style={{ color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Filters</p>
      </div>
      <div
        className={styles.columnsWrapper}
        style={{ padding: "48px 24px 36px" }}
      >
        {columns.map((el) => {
          const { id: columnId, columnTitle, cards } = el;

          return (
            <div className={styles.columnWrapper}>
              <div className={styles.columnTitleBlock}>
                <h4>{columnTitle}</h4>
                <div className={styles.controlBtnsWrapper}>
                  <RemoveIcon onClick={() => handleDeleteColumn(columnId)} />
                  <ModalColumn
                    initialValue={columnTitle}
                    type="edit"
                    onUpdate={(newColumnTitle) =>
                      handleUpdateColumn({ columnId, newColumnTitle })
                    }
                  />
                </div>
              </div>

              {/* cardsList */}
              <ul className={styles.cardsWrapper}>
                {cards.map(({ id: cardId, title, description, label }) => {
                  return (
                    <ScreenCard
                      title={title}
                      description={description}
                      label={label}
                      handleDeleteCard={() =>
                        handleDeleteCard({ columnId, cardId })
                      }
                      handleUpdateCard={(cardValue) =>
                        handleUpdateCard({ columnId, cardId, cardValue })
                      }
                    />
                  );
                })}
              </ul>

              <ModalCard
                onUpdateCard={(cardValue) => {
                  handleCreateCard({
                    columnId: columnId,
                    cardValue: { id: uuidv4(), ...cardValue },
                  });
                }}
              />
            </div>
          );
        })}
        <ModalColumn onUpdate={handleCreateColumn} />
      </div>
    </div>
  );
};

export default Screens;
