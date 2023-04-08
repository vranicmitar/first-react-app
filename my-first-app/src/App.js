import "./App.css";
import { PersonCard } from "./components/Cards/PersonCard";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import persons from "./components/common/persons.json";

const persons = [
  {
    imageURL:
      "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg",
    fullName: "",
  },
];

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
        <div
          style={{
            margin: "auto",
            width: "80%",
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            rowGap: "35px",
          }}
        >
          <PersonCard
            imageURL={
              "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg"
            }
            fullName={"Mitar Vranic"}
            location={"Novi Pazar, Serbia"}
            description={"IT Camp"}
          ></PersonCard>
          <PersonCard>
            imageURL=
            {
              "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg"
            }
            fullName={"Mitar Vranic"}
            location={"Novi Pazar, Serbia"}
            description={"IT Camp"}
          </PersonCard>
          <PersonCard></PersonCard>
          <PersonCard></PersonCard>
          <PersonCard></PersonCard>
        </div>
      </div>
    </>
  );
}
export default App;

// hotels.com
