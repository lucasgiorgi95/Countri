import React from 'react';
import { useEffect } from 'react';
import { Link, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail, cleanCountryDetail, deleteActivity } from '../Redux/action/Actions';


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
        <div>
            
            {
                specificCountry[0] ?
                <div >
                    <div >
                        <img  src={specificCountry[0]?.flags} alt='Imagen Bandera'  />
                    </div>
                    <div >
                        <h1 >{specificCountry[0]?.name}</h1>
                        <div >
                            <h4>ID: </h4>
                            <p >{specificCountry[0]?.id}</p>
                        </div>
                        <div >
                            <h4 >Capital: </h4>
                            <p >{specificCountry[0]?.capital}</p>
                        </div>
                        <div >
                            <h4 >Subregion: </h4>
                            <p >{specificCountry[0]?.subregion}</p>
                        </div>
                        <div >
                            <h4 >Area (m2): </h4>
                            <p >{specificCountry[0]?.area}</p>
                        </div>
                        <div >
                            <h4 >Population: </h4>
                            <p >{specificCountry[0]?.population}</p>
                        </div>
                        <div >
                            <h4 >Activities: </h4>
                            {(specificCountry[0]?.activities?.length>0)? 
                            specificCountry[0]?.activities.map(activity=>{
                                return (<p key={activity.name} >{activity.name+ ' ,'}</p>)
                            }):
                            
                            <Link to="/activity"><button  >NO ACTIVIY, CREATE ONE</button></Link>}

                            
                        </div>
                        <div>
                       
                        </div>
                        <div>
                            {(specificCountry[0]?.activities?.length>0)?    <button onClick={() => handleDelete(prueba)}>Delete activity</button> : ''} 
                         
                            
                            </div>
                        <div >
                            <Link to='/home'><button>Go back</button></Link>
                        </div>
                    </div>
                    
                </div>:
                <div>Ups something went wrong</div>
            }
            
        </div>
    )
}
