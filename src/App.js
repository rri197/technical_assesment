import './App.css';
import Header from "./components/header/Header";
import Body from "./components/body/MainContainer";
import Help from "./components/helpCentre/HelpCentre";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Help />
    </div>
  );
}

export default App;
