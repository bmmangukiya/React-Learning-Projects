import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


// language Options for Translator
const options = [
  {
    label: "Gujarati",
    value: "gu",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

// language translator
const Translate = () => {

  //state to keep track of change of selected language from Translator
  const [language, setLanguage] = useState(options[0]);
  //state to keep track of changes of text to translate
  const [text, setText] = useState("translator");
  return (
    <div>
      <br />
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          {/* input tag for text input, updates value of the text state  when text changes */}
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      
      {/* Dropdown for language selection */}
      <Dropdown
        label={"Select Language"}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      {/* language translator component*/}
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
