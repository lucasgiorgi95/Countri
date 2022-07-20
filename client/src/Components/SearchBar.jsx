import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName } from "../Redux/Actions";
import styles from "./SearchBar.module.css";

export default function SearchBar({ actualPage }) {
  const dispatch = useDispatch();
  // console.log('actualpage', setActualPage)

  //Creo el stado local para ir guardando lo que va escribiendo el usuario:
  const [name, setName] = useState("");

  //Creo un handle que cada vez que escriba en el searchbar lo guarda en el estado:
  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  //Despacho la acción una vez submiteado:
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Complete name");
    } else {
      dispatch(getCountriesName(name));
    }

    setName("");
    actualPage(1);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search countries here..."
        value={name}
        onChange={(e) => handleInput(e)}
        autoComplete="off"
      />
      <button
        className={styles.button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </form>
  );
}
