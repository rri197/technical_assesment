import { useState } from "react";
import "../../styles/header.css";
import {searchPlaceHolder, headerContent, headerPaymentLinks} from "../../utils/data/data";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);
  const closeLanguagePopup = evt => {
    setIsLanguagePopupOpen(!isLanguagePopupOpen);
  };
  const changeLanguage = evt => {
    setIsLanguagePopupOpen(!isLanguagePopupOpen);
    localStorage.getItem('lang') === "en"? localStorage.setItem("lang", "fr"): localStorage.setItem("lang", "en");
    window.location.reload();
  };
  
  return (
    <>
    <nav className="navigation navbar navbar-expand-lg navbar-dark fixed-top d-flex ">

      <button className="navbar-toggler collapsed" type="button" onClick={() => { setIsNavExpanded(!isNavExpanded); }}
      data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      style={{borderColor: "white", color: "white"}}>
       
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
       </svg>
      </button>

      <a href="/" className="brand-name navbar-brand">
        <img src="https://www.paysimply.ca/images/logos/PaySimply-Lg.png" alt="PaySimply" className="brand-logo"/>
      </a>

      <div className={
          isNavExpanded ? "navigation-menu" : "navigation-menu collapse navbar-collapse"} id="navbarSupportedContent">  
        <ul className="navbar-nav justify-content-end ml-auto" style={{flex: "auto"}}>
          <div role="button">
            <li className="NavbarSearchContainer" style={{alignSelf: "center"}}>
              <input type="text" style={{borderTopRightRadius: "initial", borderBottomRightRadius: "initial"}} className="form-control NavbarSearchInput" placeholder={searchPlaceHolder} ></input>
              <button type="submit" onClick={()=>window.open("https://www.paysimply.ca/Partner/Default.aspx/search/q/")} className="search-button NavbarSearchBtn" style={{backgroundColor: "white", border: "none", borderRadius: "var(--bs-border-radius)", borderTopLeftRadius: "initial", borderBottomLeftRadius: "initial", marginLeft: "-1px"}}  >
                <img src="./search.webp" alt="search" style={{height: "10px"}} />
             </button>
            </li>
          </div>
          {headerContent.map((content, index) => (
              <li key={index} className={content==="Language" || content==="Langue" ? "nav-item dropdown" : "nav-item"} style={{alignSelf: "center", color: "white"}}>
              <button key={index} type="button" onClick={() => content!=="Language" && content!=="Langue" ? window.open(headerPaymentLinks[index]): closeLanguagePopup()}
              className={content==="Language" || content==="Langue" ? "nav-link dropdown-toggle" : "nav-link"} 
              data-toggle="dropdown" style={{color: "white"}}>
                {content}
                </button>
              {content==="Language" || content==="Langue" ? (<div className={isLanguagePopupOpen? "dropdown-menu show" : "dropdown-menu"}>
                  <button onClick={() => localStorage.getItem('lang') === "en"? null: changeLanguage()} className={localStorage.getItem('lang') === "en"? "dropdown-item active": "dropdown-item"} lang="en">
                  English
                </button>
                  <button onClick={() => localStorage.getItem('lang') === "fr"? null: changeLanguage()} className={localStorage.getItem('lang') === "fr"? "dropdown-item active": "dropdown-item"} lang="fr"> Français
                </button>
              </div> ): null }
                   
            </li>
            ))
          }
        </ul>
      </div>

    </nav>
    </>
  )
}

export default Header;