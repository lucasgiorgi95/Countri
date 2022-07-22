import React from 'react';
import { useEffect } from 'react';
import { Link, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail, cleanCountryDetail, deleteActivity } from '../Redux/action/Actions';


export default function Details(){
    const AllActivities = useSelector((state) => state.activities)
    console.log('todas las act details',AllActivities)
    const pais = useSelector((state)=>state.details);
 console.log('pais',pais)
    const history= useHistory()
    

    const dispatch = useDispatch();
    
    const {id} = useParams()

    // var prueba = pais[0].activities.map((e) => {
    //     return   e.id
    //   })
      // console.log('pruebaaaaaaa',prueba)

    
    
    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, [dispatch, id])

    useEffect(() => {
        return () => {
            dispatch(cleanCountryDetail())
        }
    },[dispatch]) 
    return (
        <div>
            
            {
                pais[0] ?
                <div >
                    <div >
                        <img  src={pais[0]?.flag} alt='Imagen Bandera'  />
                    </div>
                    <div >
                        <h1 >{pais[0]?.name}</h1>
                        <div >
                            <h4>ID: </h4>
                            <p >{pais[0]?.id}</p>
                        </div>
                        <div >
                            <h4 >Capital: </h4>
                            <p >{pais[0]?.capital}</p>
                        </div>
                        <div >
                            <h4 >Subregion: </h4>
                            <p >{pais[0]?.subregion}</p>
                        </div>
                        <div >
                            <h4 >Area (m2): </h4>
                            <p >{pais[0]?.area}</p>
                        </div>
                        <div >
                            <h4 >Population: </h4>
                            <p >{pais[0]?.population}</p>
                        </div>
                        <div >
                            <h4 >Activities: </h4>
                            {(pais[0]?.activities?.length>0)? 
                            pais[0]?.activities.map(activity=>{
                                return (<p key={activity.name} >{activity.name+ ' ,'}</p>)
                            }):
                            
                            <Link to="/activity"><button  >NO ACTIVIY, CREATE ONE</button></Link>}

                            
                        </div>
                        <div>
                       
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