import { useContext } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const color = useContext(ColorContext);
  const value = useContext(LanguageContext);
  return (
    <button className={`ui button ${color}`}>
      {value.language === "english" ? "Submit" : "स्वीकार करें"}
    </button>
  );
};

export default Button;
