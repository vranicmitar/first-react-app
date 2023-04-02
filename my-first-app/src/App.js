import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    // <> fragment - najcesce se koristi za wrapovanje
    <>
      <div className="App">
        <header className="header">
          <h1 style={{ color: "white" }}>Logo</h1>
        </header>
        <Greeting
          appName={"my first app!!!"}
          userName={"Mitar Vranic"}
        ></Greeting>
      </div>
    </>
  );
}
export default App;
