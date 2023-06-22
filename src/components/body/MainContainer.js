import ProgressBar from "./ProgressBar";
import InputCard from "./InputCard";
import LinksCard from "./LinksCard";
import "../../styles/main_container.css";

function MainContainer() {
  return (
    <>
    <div className="container"> 
    <ProgressBar />
    <div className="row"> 
    <InputCard />
    <LinksCard />
    </div>
    </div>
    </>
  )
}

export default MainContainer;