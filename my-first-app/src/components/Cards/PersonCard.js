import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

function PersonCard() {
  return (
    <>
      <div className="cards">
        <div className="prvi">
          <img src="https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg"></img>
          <h2 id="naslov">Mitar Vranic</h2>
          <h3>Novi Pazar</h3>
          <p>IT camp</p>
          <FaGithub className="icon" />
        </div>

        <div className="drugi">
          <img src="https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg"></img>
          <h2 id="naslov">Mitar Vranic</h2>
          <h3>Novi Pazar</h3>
          <p>IT camp</p>
          <FaGithub className="icon" />
        </div>

        <div className="treci">
          <img src="https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg"></img>
          <h2 id="naslov">Mitar Vranic</h2>
          <h3>Novi Pazar</h3>
          <p>IT camp</p>
          <FaGithub className="icon" />
        </div>

        <div className="cetvrti">
          <img src="https://www.slikomania.rs/fotky6509/fotos/slike-na-platnu_XOBZV030E11E11-gal2.jpg"></img>
          <h2 id="naslov">Mitar Vranic</h2>
          <h3>Novi Pazar</h3>
          <p>IT camp</p>
          <FaGithub className="icon" />
        </div>
      </div>
    </>
  );
}

export { PersonCard };
