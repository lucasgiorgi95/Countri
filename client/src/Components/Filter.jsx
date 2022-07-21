import React, {useState}from 'react'
import { useDispatch } from 'react-redux'
import {orderAZ, orderPoblacion} from '../Redux/action'


function Filter() {
    const dispatch = useDispatch()
    const [orderAz, setOrderAz] = useState('')
    const [orderPopulation, setOrderPopulation] = useState('')

    function handleOrderAz(e){
        e.preventDefault()
        dispatch(orderAZ(e.target.value))
        setOrderAz(e.target.value)
    }
    function handleOrderPopulation(e){
        e.preventDefault()
        dispatch(orderPoblacion(e.target.value))
        setOrderPopulation(e.target.value)
    }
    
  return (
    <div>
        {/*FILTRO POR REGION */}
        <div>
        <select name="" id="">
            <option value="">Seleccione Region</option>
            <option value="all">All</option>
            <option value="america">America</option>
            <option value="europa">Europa</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
            <option value="polar">Polar</option>
        </select>
        </div>
        {/*ORDEN ALFABETICO*/}
        <div>
        <select onChange={(e)=>handleOrderAz(e)} >
            <option value="">Orden Alfabetico </option>
            <option value="AtoZ">A-Z</option>
            <option value="ZtoA">Z-A</option>    
        </select>    
        </div>
        {/*ORDEN POBLACION*/}
        <div>
        <select onChange={(e)=>handleOrderPopulation(e)}>
            <option value="">Orden por Poblacion </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendte</option>
        </select>
        </div>
    </div>
  )
}

export default Filter