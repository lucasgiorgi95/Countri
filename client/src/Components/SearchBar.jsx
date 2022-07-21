import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getCountriesName } from '../Redux/action/Actions'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)

    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getCountriesName(name))

    }
  return (
    <div>
        <input type="text" placeholder='Buscar...'  onChange={(e)=>handleInputChange(e)}/>
        <button className='btnHome' type='submit' onClick={(e)=>handleSubmit(e)}>Buscar</button>
    </div>
  )
}

export default SearchBar