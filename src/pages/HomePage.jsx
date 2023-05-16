import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Screens from "../components/screens/Screens";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import ModalBoard from "../components/modalBoard/ModalBoard";
import { iconsBoard } from "../utils/mochas";

const HomePage = () => {
  const [boards, setBoards] = useState([
    {
      id: uuidv4(),
      title: "Test",
      icon: iconsBoard[0].icon,
      filters: "none",
      background: "",
      columns: [
        {
          id: uuidv4(),
          //   boardId: "a",
          columnTitle: "To Do",
          cards: [
            {
              cardName: "The Watch Spot Design",
              description:
                "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
              priority: "none",
              deadLine: "12.02.2024",
            },
          ],
        },
      ],
    },
  ]);

  // options - массив, каждый объект внутри массива это колонка.
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBoard = (data) => {
    const { title, iconIndex = 0 } = data;
    setBoards((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          title,
          icon: iconsBoard[iconIndex].icon,
          filters: "none",
          background: "",
          columns: [],
        },
      ];
    });
  };
  
  return (
    <div style={{ display: "flex" }}>
      <Sidebar boards={boards} onOpenModal={handleClickOpen} />
      <main style={{ width: "100%" }}>
        <Header />
        {/* mapped routes */}
        <Routes>
          {boards.map((el) => {
            return (
              <Route
                key={el.id}
                path={`/${el?.title?.toLowerCase()}`}
                element={<Screens board={el} />}
              />
            );
          })}
        </Routes>
      </main>

      <ModalBoard
        open={open}
        onCloseModal={handleClose}
        handleBoard={handleBoard}
      />
    </div>
  );
};

export default HomePage;
