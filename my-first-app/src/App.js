import React, { useState } from "react";
import "./App.css";
import { PersonCard } from "./components/Cards/PersonCard";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import persons from "./common/persons.json";
import { HotelCard } from "./components/Cards/HotelCard";
import hotels from "./common/hotels.json";
import { Form } from "./components/Form/Form";

// const persons = [
//   {
//     imageURL:
//       "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg",
//     fullName: "Mitar Vranic",
//     location: "Novi Pazar, Serbia",
//     description: "Rising Frontend developer",
//     goToRepositories: "https://github.com/vranicmitar?tab=repositories",
//   },
//   {
//     imageURL:
//       "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg",
//     fullName: "Alen Muslic",
//     location: "Novi Pazar, Serbia",
//     description: "Rising Frontend developer",
//     goToRepositories: "https://github.com/alenmuslic?tab=repositories",
//   },
//   {
//     imageURL:
//       "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg",
//     fullName: "Aladin Zecic",
//     location: "Novi Pazar, Serbia",
//     description: "Rising Frontend developer",
//     goToRepositories: "https://github.com/aladinzecic?tab=repositories",
//   },
//   {
//     imageURL:
//       "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg",
//     fullName: "Haris Muslic",
//     location: "Novi Pazar, Serbia",
//     description: "Rising Frontend developer",
//     goToRepositories: "https://github.com/harismuslic04?tab=repositories",
//   },
// ];

const poruke = [
  "Danas je subota",
  "Usubotu je lepo vreme",
  "Subota je dan za kupovinu",
  "Subota je dan za kafu",
  "Subota je dan za kupanje",
];

const teams = [
  {
    id: 1,
    name: "Arsenal",
    points: 72,
    matches: 30,
  },
];

function App() {
  const [arr, setArr] = useState(poruke);

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
            gridTemplateColumns: "repeat(4,1fr)",
            rowGap: "35px",
          }}
        >
          {/* <PersonCard
            imageURL={
              "https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg"
            }
            fullName={"Mitar Vranic"}
            location={"Novi Pazar, Serbia"}
            description={"IT Camp"}
            goToRepositories="https://github.com/vranicmitar?tab=repositories"
          ></PersonCard>{" "}
          <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/111905831?v=4"}
            fullName={"Alen Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Alen is rising Web developer..."}
            goToRepositories={"https://github.com/alenmuslic?tab=repositories"}
          />
          <PersonCard
            imageURL={
              "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg"
            }
            fullName={"Aladin Zecic"}
            location={"Novi pazar, Serbia"}
            description={"Aladin is rising Web developer..."}
            goToRepositories={"https://github.com/aladinzecic?tab=repositories"}
          />
          <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/111905979?v=4"}
            fullName={"Haris Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Haris is rising Web developer..."}
            goToRepositories={
              "https://github.com/harismuslic04?tab=repositories"
            }
          /> */}

          {persons.map((person) => (
            <PersonCard
              key={person.id}
              imageURL={person.imageURL}
              fullName={person.fullName}
              location={person.location}
              description={person.description}
              goToRepositories={person.goToRepositories}
            />
          ))}
        </div>
        <div className="hotels">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              imageURL={hotel.imageURL}
              caption={hotel.caption}
              stars={hotel.stars}
              description={hotel.description}
              reviews={hotel.reviews}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;

// hotels.com
