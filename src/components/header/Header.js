import { useState } from "react";
import "../../styles/header.css";
import {headerContent, headerPaymentLinks} from "../../utils/data/data";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
              <input type="text" style={{borderTopRightRadius: "initial", borderBottomRightRadius: "initial"}} className="form-control NavbarSearchInput" placeholder="Search for a bill..."></input>
              <button type="submit" className="search-button NavbarSearchBtn" style={{backgroundColor: "white", border: "none", borderRadius: "var(--bs-border-radius)", borderTopLeftRadius: "initial", borderBottomLeftRadius: "initial", marginLeft: "-1px"}}  >
                <img src="./search.webp" alt="search" style={{height: "10px"}} />
             </button>
            </li>
          </div>
          {headerContent.map((content, index) => (
              <li key={index} className={content==="Language" ? "nav-item dropdown" : "nav-item"} style={{alignSelf: "center", color: "white"}}>
              <button key={index} type="button" onClick={() => window.open(headerPaymentLinks[index])}
              className={content==="Language" ? "nav-link dropdown-toggle" : "nav-link"} data-toggle="dropdown" style={{color: "white"}}>{content}</button>
              {content==="Language" ? (<div className="dropdown-menu">
                  <a href="/" className="dropdown-item active" lang="en">
                  English
                </a>
                  <a href="/" className="dropdown-item" lang="fr" > Français
                </a>
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

export default Header