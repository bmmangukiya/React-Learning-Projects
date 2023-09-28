import { createRoot } from "react-dom/client";
import { React } from "react";

const App = () => {
    const buttonText = {text: 'Click Me!'};
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// ReactDOM.render(<App />, document.querySelector('#root'));
createRoot(document.querySelector("#root")).render(<App />);
