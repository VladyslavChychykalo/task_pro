import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import needHelpImage from "../../assets/images/needHelpImage.png";
import styles from "./Sidebar.module.css";

const drawerWidth = 260;

export default function ClippedDrawer({ boards, onOpenModal }) {
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
            <IconButton
              onClick={onOpenModal}
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#BEDBB0",
                minWidth: "40px",
                height: "36px",
                borderRadius: "4px",
                "&:hover": {
                  background: "#BEDBB0",
                },
              }}
            >
              <PlusIcon />
            </IconButton>
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

        <div style={{ padding: "0 24px", marginTop: "auto" }}>
          <div
            style={{
              backgroundColor: "#1F1F1F",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <img src={needHelpImage} alt="Help" />
            <p className={styles.helpDescription}>
              If you need help with
              <span>{" " + "TaskPro" + " "}</span>, check out our support
              resources or reach out to our customer support team.
            </p>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
