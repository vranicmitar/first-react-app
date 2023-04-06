import "./App.css";
import { PersonCard } from "./components/Cards/PersonCard";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    // <> fragment - najcesce se koristi za wrapovanje
    <>
      <div className="App">
        <Navbar>{/* <p>Primer</p> */}</Navbar>
        <Greeting
          appName={"my first app!!!"}
          userName={"Mitar Vranic"}
        ></Greeting>
        <PersonCard></PersonCard>
      </div>
    </>
  );
}
export default App;
