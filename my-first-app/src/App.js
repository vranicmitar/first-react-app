import React, { useState, useEffect } from "react";
import "./App.css";
import { PersonCard } from "./components/Cards/PersonCard";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import persons from "./common/persons.json";
import { HotelCard } from "./components/Cards/HotelCard";
import hotels from "./common/hotels.json";
import { Form } from "./components/Form/Form";
import TeamCard from "./components/Cards/TeamCard/TeamCard";
import teamsJSON from "./common/teams.json";
const poruke = [
  "Danas je subota",
  "Usubotu je lepo vreme",
  "Subota je dan za kupovinu",
  "Subota je dan za kafu",
  "Subota je dan za kupanje",
];

export const BASE_URL = "https://api.quotable.io";

function App() {
  const reverseArr = () => {
    const _arr = [...arr];
    const reversed = _arr.reverse();
    setArr(reversed);
  };

  const [arr, setArr] = useState(poruke);

  const [teams, setTeams] = useState(teamsJSON);
  console.log(teams);

  // Brisanje tima:
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(5);

  const getQuotes = async () => {
    const getQuotes = await fetch(`${BASE_URL}/quotes?page=${page}`);
    const data = await getQuotes.json();
    const results = data.results;

    setQuotes(results);
    console.log(data);
    // console.log(results);
  };

  console.log(quotes[0]?.content);

  useEffect(() => {
    getQuotes();
  }, [page]);

  return (
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
        <Form />

        <div
          className="turnSen"
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => {
              reverseArr();
              console.log("okrenuo se niz");
            }}
          >
            Promeni raspored poruka
          </button>
          {arr.map((poruka) => (
            <p>{poruka}</p>
          ))}
        </div>
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            matches={team.matches}
            points={team.points}
            deleteTeam={() => deleteTeam(team.id)}
          />
        ))}
      </div>
    </>
  );
}
export default App;

// hotels.com
