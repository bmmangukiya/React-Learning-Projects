import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {

    // open in new tab using CTRL
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    //prevent page reload
    event.preventDefault();

    //changing URL
    window.history.pushState({}, "", href);

    //custom event 
    const navEvent = new PopStateEvent("popstate");

    //when URL changes it dispatches
    window.dispatchEvent(navEvent);
  };


  return (

    //Anchor tag for Navigation
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
