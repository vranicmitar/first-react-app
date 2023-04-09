import React from "react";
import "./App.css";
import { PersonCard } from "./components/Cards/PersonCard";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import persons from "./common/persons.json";
import { HotelCard } from "./components/Cards/HotelCard";
import hotels from "./common/hotels.json";

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
              imageURL={hotel.imageURL}
              caption={hotel.caption}
              stars={hotel.stars}
              description={hotel.description}
              reviews={hotel.reviews}
            />
          ))}
        </div>

        <div className="container">
          <form onSubmit={() => {}}>
            {" "}
            <label htmlFor="firstName" required value="">
              Unesite Vase ime
            </label>
            <input type="text" id="firstName" name="firstName" />
            <br></br>
            <br></br>
            <label htmlFor="lastName" required>
              Unesite Vase prezime
            </label>
            <input type="text" id="lastName" name="lastName" />
            <br></br>
            <br></br>
            <label htmlFor="email" required>
              Unesite Vas email
            </label>
            <input type="email" id="email" name="email" />
            <br></br>
            <br></br>
            <label htmlFor="phone">Unesite Vas broj telefona</label>
            <input type="tel" id="phone" name="phone" />
            <br></br>
            <br></br>
            <button type="submit">Potvrdi</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;

// hotels.com
