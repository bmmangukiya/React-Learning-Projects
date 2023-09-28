// Google Translate API KEY
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  //state to keep track of changes in translation results
  const [translated, setTranslated] = useState("");
  //state to keep track of changes in text
  const [debouncedText, setDebouncedText] = useState(text);

  // hook to set finalized text input
  useEffect(() => {

    //sets debouncedText if user doesn't type anything after more than 500ms
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    //clears 500ms timeout ,if user types
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);


  // sends translation request and sets results from received response whenever selected language or text changes
  useEffect(() => {
    const doTranslation = async () => {

      //post request to Google API for translation 
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      //response from Google API 
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);
  return (
    <div>
      {/* translation results */}
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
