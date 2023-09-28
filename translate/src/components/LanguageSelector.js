import React, {useContext} from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const context = useContext(LanguageContext);
  return (

            <div className="ui container">
            <div>
              Select a language:
              <i className="flag us" onClick={() => context.onLanguageChange("english")} />
              <i className="flag in" onClick={() => context.onLanguageChange("hindi")} />
            </div>
          </div>
  )
};

export default LanguageSelector;