import { IconButton, Box } from "@mui/material";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";

const ButtonCreate = ({
  stylesOptions = {},
  onClick = () => null,
  className,
  isButton = false,
}) => {
  const Element = isButton ? IconButton : Box;

  return (
    <Element
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
    </Element>
  );
};

export default ButtonCreate;
