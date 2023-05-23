import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Screens from "../components/screens/Screens";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { iconsBoard } from "../utils/mochas";

const HomePage = () => {
  const [boards, setBoards] = useState([
    {
      id: uuidv4(),
      title: "Test",
      icon: iconsBoard[0].icon,
      // filters: "none",
      background: "",
      columns: [
        {
          id: uuidv4(),
          columnTitle: "To Do",
          cards: [
            {
              id: uuidv4(),
              title: "The Watch Spot Design",
              description:
                "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
              label: "none",
              deadLine: "12.02.2024",
            },
          ],
        },
      ],
    },
  ]);

  // const [activeBoardId, setActiveBoardId] = useState(null);

  const handleUpdateMainBoard = (boardId, newColumns) => {
    setBoards((prev) =>
      prev.map((el) =>
        boardId !== el.id ? el : { ...el, columns: [...newColumns] }
      )
    );
  };

  const handleCreateBoard = (data) => {
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

  const handleDeleteBoard = (boardId) => {
    const newArr = boards.filter((el) => el.id !== boardId);
    setBoards(newArr);
  };

  const handleUpdateBoard = ({ boardId, newValue = {} }) => {
    const { title, iconIndex = 0 } = newValue;
    console.log(newValue);
    const newArr = boards.map((el) =>
      el.id === boardId
        ? { ...el, icon: iconsBoard[iconIndex].icon, title }
        : el
    );

    setBoards(newArr);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        boards={boards}
        handleCreateBoard={handleCreateBoard}
        handleDeleteBoard={handleDeleteBoard}
        handleUpdateBoard={handleUpdateBoard}
      />
      <main
        style={{
          width: "100%",
          overflow: "auto",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Routes>
          {boards.map((el) => {
            return (
              <Route
                key={el.id}
                path={`/${el?.title?.toLowerCase()}`}
                element={
                  <Screens
                    board={el}
                    handleUpdateMainBoard={handleUpdateMainBoard}
                  />
                }
              />
            );
          })}
        </Routes>
      </main>
    </div>
  );
};

export default HomePage;
