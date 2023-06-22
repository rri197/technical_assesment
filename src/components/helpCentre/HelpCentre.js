import React, { useState } from 'react';

function HelpCentre() {
    const [isHelpCentreOpen, setIsHelpCentreOpen] = useState("hidden");

    const helpPopup = evt => {
        if (isHelpCentreOpen === "visible") {
            setIsHelpCentreOpen("hidden");
        } else {
            setIsHelpCentreOpen("visible");
        }
    };

    const closeHelp = evt => {
        setIsHelpCentreOpen("hidden");
    };
  return (
    <>
   <button aria-label="Help Centre" id="widget-button" type="button" 
    style={{cursor: "pointer", borderWidth: "0px", zIndex: "1000001", position: "fixed",
    width: "4em", display: "block", height: "4em", bottom: "40px", right: "40px", visibility: "visible",
    backgroundColor: "rgb(213, 43, 30)", boxShadow: "rgb(101, 101, 101) 0px 5px 5px", borderRadius: "2em", color: "rgb(255, 255, 255)"}}
    onClick={helpPopup}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"/>
      </svg>
    </button>
    { isHelpCentreOpen==="visible" ? ( <iframe src="https://help.paymentsource.net/widget/paysimply/en" id="iframe-widget" title="help"
    style={{width: "450px", height: "450px", position: "fixed", right: "0px", bottom: "0px", zIndex: "2147483647", border: "none",
     borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px",visibility: "visible", transition: "all 0.5s ease 0s"}}
    class={isHelpCentreOpen==="Visible" ? "frameVisible": ""} onBlur={closeHelp}>
    </iframe> ): null
    }
    
    </>
  )
}

export default HelpCentre;