import { LanguageStore } from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

const App = () => {


  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
};
export default App;
