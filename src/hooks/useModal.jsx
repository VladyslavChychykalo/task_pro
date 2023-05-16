import { useEffect, useState } from "react";

const useModal = (ref) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code !== `Escape`) return;

      setToggle(false);
    };

    const handleClick = ({ target }) => {
      if (target !== ref) setToggle(false);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, [ref]);

  const handleToggle = (value) => {
    if (value) {
      return setToggle(value);
    }

    setToggle((prev) => !prev);
  };

  return { toggle, handleToggle };
};

export default useModal;
