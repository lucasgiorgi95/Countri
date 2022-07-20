import React from "react";
import styles from './Paginado.module.css'


export default function Paginado({ allCountries,setActualPage}){
    console.log('countrypage',allCountries)
    const pageNumber = []

    
    for (let i = 1; i <= Math.ceil(allCountries/10); i++) {
        pageNumber.push(i)
    }
    const paginado = (pageNumber) => {
        setActualPage(pageNumber);
    }

    return(
        <nav>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    {pageNumber && pageNumber.map(n => {
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      return  <button className={styles.button} key={n} onClick={() => paginado(n)}>{n}</button>
                    })}
                </li>
            </ul>
        </nav>
    )
}