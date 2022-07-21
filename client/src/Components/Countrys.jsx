import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Country from './Country'
import { Link } from 'react-router-dom'
import { getAllActivities, getAllCountries, filterByContinent, filterByActivity, orderByPopulation, orderByAz} from '../Redux/action/Actions.js';
import Paginado from './Paginado'
import SearchBar from './SearchBar'
import './Country.css'


function Countrys() {
  
  const activities = useSelector((state) => state.activities);
  // console.log(allActivity)
  const allCountries = useSelector((state) => state.countries)
  // const allCountry = [{
  //   id:1,
  //   name:"Argentina",
  //   capital:"Bs.As",
  //   continent:"Sur America"
  // },
  // {
  //   id:2,
  //   name:"Italia",
  //   capital:"Roma",
  //   continent:"Europa"
  // },
  // {
  //   id:3,
  //   name:"Japon",
  //   capital:"Tokyo",
  //   continent:"Aisa"
  // }

//]
  const dispatch = useDispatch()

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

  const [currentPage, setCurrentPage] = useState(1)
  const [countryPerPage, setCountryPerPage] = useState(10)
  const indexLastCountry = currentPage * countryPerPage
  const indexFirstCountry = indexLastCountry - countryPerPage
  const currentCountry = allCountries.slice(indexFirstCountry,indexLastCountry)
  const paginado = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value))
    setCurrentPage(1)
    setContinent(e.target.value)
  }

  function handleFilterActivity(e){
    e.preventDefault();
    dispatch(filterByActivity(e.target.value))
    setCurrentPage(1)
    setActivity(e.target.value)
  }

  function handleOrderByPopulation(e){
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value))
    setCurrentPage(1)
    setOrderPopulation(e.target.value)
  }

  function handleOrderByAz(e){
    e.preventDefault();
    dispatch(orderByAz(e.target.value))
    setCurrentPage(1)
    setOrderAz(e.target.value)
  }


const continents =['america','africa','asia','oceania','europa']
  return (
    <>
     <nav className='containerNav'>
     <Link to = '/CreateActivity'> <button className='btnHome'>Crear Actividad </button></Link>
      <button  className='btnHome' onClick={e=>{handleClick(e)}}>Volver a cargar paises</button>
        <div>
        <select onChange={e => handleFilterActivity(e)} >
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
       </div>
        <div>
        <select  className='btnHome' onChange={(e)=>handleFilterContinent(e)}>
            <option value="all">Seleccione Region</option>
            <option value="all">All</option>
            {/* {continents?.map((c)=>(<option value={c}>{c}</option>))} */}
            <option value="Americas">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
        </select>
        </div>
        
        <div>
        <select  className='btnHome' onChange={(e)=>handleOrderByAz(e)} >
            <option value="">Orden Alfabetico </option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>    
        </select>    
        </div>
        <div>
        <select className='btnHome' onChange={(e)=>handleOrderByPopulation(e)}>
            <option value="">Orden por Poblacion </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
        </div>

        <SearchBar/>
      </nav>
        
  
    <div className='containerCard'> 
      {currentCountry.length > 0 ? currentCountry.map(e =>
        <Link className='link' key={e.id} to={`/country/${e.id}`}>
           <Country
               flag={e.flag}
               name={e.name}
               region={e.region}
               subregion={e.subregion}
               
           />
        </Link>
   ): 
   <h2>Loading</h2>}
   </div>
   <Paginado countryPerPage={countryPerPage} allCountry={allCountries.length} paginado={paginado}/>
   </>
  )
}

export default Countrys