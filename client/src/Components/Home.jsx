import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities, getAllCountries, filterByContinent, filterByActivity, orderByPopulation, orderByAz} from '../Redux/Actions';
import Card from './Card';
import Paginado from './Paginado';
import styles from './Home.module.css'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Loading from './Loading';


export default function Home(){
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries)
  // console.log('prueba2',countries)
  const activities = useSelector((state) => state.activities);
  // console.log('actividades ver',activities)

  const [actualPage, setActualPage] = useState(1) // pagina inicial 1
  let countriesPerPage
  actualPage === 1? countriesPerPage = 9 : countriesPerPage = 10
    const lastCountry = actualPage * countriesPerPage // pagina actual por cantidad de paises por pagina ej=10
  const firstCountry = lastCountry - countriesPerPage // 10-10 = 0
  const actualCountry = allCountries?.slice(firstCountry, lastCountry)

  

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }

  const [continent, setContinent] = useState("");
  const [activity, setActivity] = useState("")
  const [orderPopulation, setOrderPopulation] = useState("")
  const [orderAz, setOrderAz] = useState("")

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value))
    setActualPage(1)
    setContinent(e.target.value)
  }

  function handleFilterActivity(e){
    e.preventDefault();
    dispatch(filterByActivity(e.target.value))
    setActualPage(1)
    setActivity(e.target.value)
  }

  function handleOrderByPopulation(e){
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value))
    setActualPage(1)
    setOrderPopulation(e.target.value)
  }

  function handleOrderByAz(e){
    e.preventDefault();
    dispatch(orderByAz(e.target.value))
    setActualPage(1)
    setOrderAz(e.target.value)
  }

  if(allCountries.length === 0){
    return(
        <div>
        <Loading
        />
        </div>
    ) 
 }else{

  return (
    <div className={styles.home}>
      <Link className={styles.link} to="/activity">Create Activity</Link>
      <h1 className={styles.h1}>Countries App</h1>
      <button onClick={(e) => handleClick(e)} className={styles.reload}>Reload Countries</button>
      <SearchBar
      actualPage={setActualPage}
      />
      <div>
        <select onChange={e => handleOrderByAz(e)} className={styles.select}>
          <option value={"default"} hidden>
            Name
          </option>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>

        <select onChange={e => handleFilterContinent(e)} className={styles.select}>
          <option value={"default"} hidden>
            Continent
          </option>
          <option  value="All">All</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <select  onChange={e => handleOrderByPopulation(e)} className={styles.select}>
          <option value={"default"} hidden>
            Population
          </option>
          <option value="asc">Ascendent</option>
          <option value="desc">Descendent</option>
        </select>

        <select onChange={e => handleFilterActivity(e)} className={styles.select}>
          <option value={"default"} hidden>
            Activity
          </option>
          <option value="All">All</option>
          {activities &&
            activities.map((activity, index) => (
              <option key={index} value={activity.name}>
                {activity.name}
              </option>
            ))}
        </select>

        <Paginado
        actualPage={actualPage}
        allCountries={allCountries.length} // necesito un valor numerico
        setActualPage={setActualPage}
        />

        {allCountries.length === 0 && allCountries.length === 0 ? (
          alert('pais no encontrado')
        ) : (
          <div className={styles.cardGrid}>
            {actualCountry &&
              actualCountry.map((country) => {
                return (
                  <Card
                  
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continents={country.continents}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
}

