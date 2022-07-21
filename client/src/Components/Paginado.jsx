import React from 'react'

function Paginado({countryPerPage, allCountry, paginado}) {

    const numbers = []
    for(let i = 0 ; i <=Math.ceil(allCountry/countryPerPage)-1; i++){
      numbers.push(i+1)
    }
  return (
    <nav>
        <ul>
        {
         numbers && numbers.map(number =>{
            return(
             <button className='btn' key={number} onClick={()=>paginado(number)}><span>{number}</span></button>
            )})
        }
        </ul>
    </nav>
  )
}

export default Paginado