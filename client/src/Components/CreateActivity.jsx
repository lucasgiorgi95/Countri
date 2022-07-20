import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, postActivity } from "../Redux/Actions";
import { Link, useHistory } from "react-router-dom";
import styles from "./CreateActivity.module.css";

export const validate = (input) => {
  // console.log(activities);
  let errors = {};
  let testSpace = /^\S+/; //reg exp que no permite espacios en blanco al inicio
  if (!input.name) {
    errors.name = "Don't forget your name";
    errors.required = true;
  } else if (input.name.length < 2) {
    errors.name = "One letter is nos allow";
    errors.required = true;
  } else if (!testSpace.test(input.name)) {
    errors.name = "Blanks space is not allowed";
    errors.required = true;
  }
  if (!input.description) {
    errors.description = "Description please";
    errors.required = true;
  } else if (!testSpace.test(input.description)) {
    errors.description = "Blanks space is not allowed";
    errors.required = true;
  }
  if (!input.difficulty) {
    errors.difficulty = "Level of difficulty please";
    errors.required = true;
  } else if (input.difficulty < 1 || input.difficulty > 5) {
    errors.difficulty = "Level of difficulty 1-5";
    errors.required = true;
  }
  if (!input.duration) {
    errors.duration = "Number of hours please";
    errors.required = true;
  } else if (input.duration < 1 || input.duration > 48) {
    errors.duration = "Acep values from 1 to 48 hs";
    errors.required = true;
  }
  if (!input.season) {
    errors.season = "Please check a season";
    errors.required = true;
  }
  if (input.countries.length < 1) {
    errors.countries = "Select a country";
    errors.required = true;
  }
  console.log(errors);
  return errors;
};

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCountries = useSelector((state) => state.countries);

  const [input, setInput] = useState({
    name: "",
    description: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [], // quiero que se guarde mas de uno
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  // console.log(input)

  function handleCheck(e) {
    if (e.target.checked)
      setInput({
        ...input,
        season: e.target.value,
      });
    setErrors(
      validate({
        ...input,
        season: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.countries.includes(e.target.value)) {
      alert("Don't repeat the country");
    } else {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value], //colocar mas de 1 pais
      });
      setErrors(
        validate({
          ...input,
          countries: [...input.countries, e.target.value],
        })
      );
      console.log(input.countries);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handlesubmit", input);
    dispatch(postActivity(input));
    alert("Activity Created");
    setInput({
      name: "",
      description: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const onClose = (countryDelete) => {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== countryDelete),
    });
    setErrors(
      validate({
        ...input,
        countries: input.countries.filter(
          (country) => country !== countryDelete
        ),
      })
    );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formComponent}>
        <div className={styles.inputComponent}>
          <div className={styles.inputComponent}>
            <label className={styles.formLabel}>Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              required
            />
            {errors.name && <p className={styles.errors}>{errors.name}</p>}
          </div>
        </div>
        <div className={styles.inputComponent}>
          <label className={styles.formLabel}>Description:</label>
          <input
          className={styles.inputText}
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
            required
          />
          {errors.description && (
            <p className={styles.errors}>{errors.description}</p>
          )}
        </div>
        <div className={styles.inputComponent}>
          <label className={styles.formLabel}>Difficulty:</label>
          <input
            type="number"
            value={input.difficulty}
            name="difficulty"
            onChange={handleChange}
            required
            placeholder="0-5"
            min="1"
            max="5"
          />
          {errors.difficulty && (
            <p className={styles.errors}>{errors.difficulty}</p>
          )}
        </div>
        <div className={styles.inputComponent}>
          <label className={styles.formLabel}>Duration:</label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            onChange={handleChange}
            required
            placeholder="0-48"
            min="1"
            max="48"
          />
          <label className={styles.formLabel}>Hs</label>
          {errors.duration && (
            <p className={styles.errors}>{errors.duration}</p>
          )}
        </div>
        <div>
          <label className={styles.labelSeason}>Season:</label>
          <label className={styles.labelSeason}>
            <input
              type="checkbox"
              value="winter"
              name="winter"
              onChange={handleCheck}
            />
            Winter
          </label>
          <label className={styles.labelSeason}>
            <input
              type="checkbox"
              value="summer"
              name="summer"
              onChange={handleCheck}
            />
            Summer
          </label>
          <label className={styles.labelSeason}>
            <input
              type="checkbox"
              value="autumn"
              name="autumn"
              onChange={handleCheck}
            />
            Autumn
          </label>

          <label className={styles.labelSeason}>
            <input
              type="checkbox"
              value="spring"
              name="spring"
              onChange={handleCheck}
            />
            Spring
          </label>
          {errors.season && <p className={styles.errors}>{errors.season}</p>}
        </div>
        <div className={styles.inputComponent}>
          <label className={styles.formLabel}>Countries:</label>
          <select className={styles.selectForm} onChange={handleSelect}>
            <option hidden value="Paises">
              Select here
            </option>
            {allCountries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countries && (
            <p className={styles.errors}>{errors.countries}</p>
          )}
          <div>
            {input.countries.map((country) => {
              return (
                <div key={country} className={styles.countrySelected}>
                  <div>
                    <button onClick={() => onClose(country)}>X</button>
                  </div>
                  <div>
                    <h4 className={styles.h4}>{country + ", "}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <ul></ul>
        </div>
        <div>
          <button className={styles.buttonCreate} type="submit">
            Create Activity
          </button>

          <div className={styles.buttonsContainer}>
            <Link to="/home" className={styles.Link}>
              <button className={styles.buttonCreate}>Return Home</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
