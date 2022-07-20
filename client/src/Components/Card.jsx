import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'


export default function Card({ name, flags, continents,id }) {
//   console.log("holaaaaa", name, flags, continents, id);

  return (
    <div className={styles.card}>
      <Link className={styles.Link} to={`/country/${id}`}>
        <img className={styles.img} src={flags} alt="not found" />
        <h3 className={styles.h3}>{name}</h3>
        <h4 className={styles.h3}>{continents}</h4>
      </Link>
    </div>
  );
}