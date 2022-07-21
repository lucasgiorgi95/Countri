import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetails, getActivity} from '../Redux/action/index.js'
import { useEffect } from 'react';
// import Activity from './algo'
import"./Detail.css";


function ActivityDetail() {
    const dispatch = useDispatch()

    const allActivity = useSelector((state)=>state.activity)

    useEffect(()=>{
      dispatch(getActivity())
  },[dispatch])


  return (
    <>
        {
          allActivity.length>0 ?
          <div>
          <h3>nombre:{allActivity[0].activity}</h3>
          </div>:
          <div>
            <Link to="/CreateActivity"><button  >Crear actividad</button></Link>
          </div>
          
        }      
    </>
  )
}

export default ActivityDetail