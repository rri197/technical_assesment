import "../../styles/progress_bar.css";
import {ProgressBarText} from "../../utils/data/data";

function progress_bar() {
  return (
    <>
    <div className="row justify-content-center"> 
    <ul className="nav navigation-wizard my-3 justify-content-center d-none d-sm-block">
      {ProgressBarText.map((content, index) => (
        <li key={index} 
        style={{ color: content==="Details" || content==="Détails" ? "#fff": "initial", background: content==="Details" || content==="Détails" ? "#d52b1e": ""}}>
          <span>
            {content}
          </span>
        </li>
      ))}
    </ul>
    </div>
    </>
  )
}

export default progress_bar;