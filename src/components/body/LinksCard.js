import {linksCardText1, linksCardText2, linksCardText3, linksCardText4} from "../../utils/data/data";
import "../../styles/links_card.css";

function links_card() {
    return (
      <>
      <div className="col-md-4">
        <div className="card text-center">
          <div className="card-header" style={{display: "flex", flexDirection: "column"}}>
            <span className="card-title mb-1"> {linksCardText1[0]} </span>
            <span className="card-text mb-1"> {linksCardText1[1]} </span>
            <a href="https://www.canada.ca" target="_blank" rel="noreferrer">https://www.canada.ca</a>
          </div>
          <div className="card-body" style={{display: "flex", flexDirection: "column"}}>
            <span className="card-title mb-1"> {linksCardText2[0]} </span>
            <span className="card-text mb-1"> {linksCardText2[1]} </span>
            <span className="card-text mb-0"> {linksCardText2[2]} </span>
          </div>
          <div className="card-footer">
          <svg className="svg-inline--fa fa-lock fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" 
          data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" style={{width: "0.8rem"}}>
            <path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
              </path>
          </svg>
          {linksCardText3[0]}
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-header text-center link-card-footer">
           <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lock" viewBox="0 0 16 16">
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
          </svg>
          {linksCardText4[0]}
          </span>
           <span className="mb-0">
            <a href="https://www.canada.ca/en/revenue-agency/corporate/security/protect-yourself-against-fraud.html" target="_blank"
           rel="noreferrer" style={{textDecoration: "none"}}>
            <span style={{color: "#2b4e7b"}}> 
            {linksCardText4[1]} 
            </span>
            </a>
            </span>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default links_card;