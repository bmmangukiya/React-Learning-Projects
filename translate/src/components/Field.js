import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const value = useContext(LanguageContext);

  return (
    <div className="ui field">
      <label>{value.language === "english" ? "Name" : "नाम"}</label>
      <input />
    </div>
  );
};

export default Field;
