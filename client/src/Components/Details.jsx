import React from 'react';
import { useEffect } from 'react';
import { Link, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail, cleanCountryDetail, deleteActivity } from '../Redux/Actions';
import styles from './Details.module.css'


export default function Details(){
    const AllActivities = useSelector((state) => state.activities)
    console.log('todas las act details',AllActivities)
    const specificCountry = useSelector((state) => state.details);

    const history= useHistory()
    

    const dispatch = useDispatch();
    
    const {id} = useParams()

    var prueba = specificCountry[0]?.activities.map((e) => {
      return   e.id
    })
    console.log('pruebaaaaaaa',prueba)

    

    function handleDelete(prueba) {
        console.log('id del handle select',prueba)
        dispatch(deleteActivity(prueba));
        alert('Deleted')
        history.push('/home');
    }
    
    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, [dispatch, id])

    useEffect(() => {
        return () => {
            dispatch(cleanCountryDetail())
        }
    },[dispatch])

   
    // console.log(specificCountry[0]?.activities)
    
    return (
        <div className={styles.container}>
            
            {
                specificCountry[0] ?
                <div className={styles.detailsBox}>
                    <div className={styles.containImg}>
                        <img className={styles.countryFlag} src={specificCountry[0]?.flags} alt='Imagen Bandera'  />
                    </div>
                    <div className={styles.textBox}>
                        <h1 className={styles.countryName}>{specificCountry[0]?.name}</h1>
                        <div className={styles.details}>
                            <h4 className={styles.detail}>ID: </h4>
                            <p className={styles.detail}>{specificCountry[0]?.id}</p>
                        </div>
                        <div className={styles.details}>
                            <h4 className={styles.detail}>Capital: </h4>
                            <p className={styles.detail} >{specificCountry[0]?.capital}</p>
                        </div>
                        <div className={styles.details}>
                            <h4 className={styles.detail}>Subregion: </h4>
                            <p className={styles.detail}>{specificCountry[0]?.subregion}</p>
                        </div>
                        <div className={styles.details}>
                            <h4 className={styles.detail}>Area (m2): </h4>
                            <p className={styles.detail}>{specificCountry[0]?.area}</p>
                        </div>
                        <div className={styles.details}>
                            <h4 className={styles.detail}>Population: </h4>
                            <p className={styles.detail}>{specificCountry[0]?.population}</p>
                        </div>
                        <div className={styles.details}>
                            <h4 className={styles.detail}>Activities: </h4>
                            {(specificCountry[0]?.activities?.length>0)? 
                            specificCountry[0]?.activities.map(activity=>{
                                return (<p className={styles.detail} key={activity.name} >{activity.name+ ' ,'}</p>)
                            }):
                            
                            <Link to="/activity"><button className={styles.noActivity} >NO ACTIVIY, CREATE ONE</button></Link>}

                            
                        </div>
                        <div>
                       
                        </div>
                        <div>
                            {(specificCountry[0]?.activities?.length>0)?    <button className={styles.noActivity} onClick={() => handleDelete(prueba)}>Delete activity</button> : ''} 
                         
                            
                            </div>
                        <div className={styles.backButton}>
                            <Link to='/home'><button className={styles.backHome}>Go back</button></Link>
                        </div>
                    </div>
                    
                </div>:
                <div>Ups something went wrong</div>
            }
            
        </div>
    )
}
