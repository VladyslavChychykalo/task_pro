import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import LogoBlock from "../logoBlock/LogoBlock";
import HelpBlock from "./helpBlock/HelpBlock";
import ModalBoard from "../modal/modalBoard/ModalBoard";

import styles from "./Sidebar.module.css";

const drawerWidth = 260;

export default function ClippedDrawer({ boards, handleBoard }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#121212",
          padding: "24px 0px",
        },
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ padding: "0 24px" }}>
          <LogoBlock />
          <p className={styles.pretitle}>My boards</p>
          <Divider sx={{ border: "1px solid rgba(255, 255, 255, 0.1)" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            pt="14px"
            pb="14px"
          >
            <p className={styles.boardText}>
              Create a <br /> new board
            </p>

            <ModalBoard handleBoard={handleBoard} />
          </Box>
          <Divider sx={{ border: "1px solid rgba(255, 255, 255, 0.1)" }} />
        </div>

        <ul className={styles.boardsLinksList}>
          {boards.map((el) => {
            const { title, id, icon: Icon } = el;
            const isActive =
              location.pathname.split("/").join("") === title?.toLowerCase();
            return (
              <li
                onClick={() => {
                  navigate(`/${title?.toLowerCase()}`);
                }}
                className={`${isActive && styles.activeLabelBoard}`}
                key={id}
              >
                <Icon />
                {title}
              </li>
            );
          })}
        </ul>

        <HelpBlock />
      </Box>
    </Drawer>
  );
}
