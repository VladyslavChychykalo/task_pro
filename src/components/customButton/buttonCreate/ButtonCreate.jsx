import { IconButton } from "@mui/material";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";

const ButtonCreate = ({
  stylesOptions = {},
  onClick = () => null,
  className,
}) => {
  return (
    <IconButton
      onClick={onClick}
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
        ...stylesOptions,
      }}
      className={className}
    >
      <PlusIcon />
    </IconButton>
  );
};

export default ButtonCreate;
