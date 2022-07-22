import axios from 'axios';


export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
// export const ORD_CONTINENT = 'ORD_CONTINENT';
export const FILTER_BY_ACTIVITIY = 'FILTER_BY_ACTIVITY'
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION'
export const ORDER_BY_AZ = 'ORDER_BY_AZ'
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS'
export const CLEAN_COUNTRY_DETAILS = 'CLEAN_COUNTRY_DETAILS'
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'


export function getAllCountries() {
    return async (dispatch) => {
        var json = await axios.get("http://localhost:3001/country");
       //console.log('todos los paises',json.data)
        return dispatch({
            type: "GET_ALL_COUNTRIES",
            payload: json.data
        })
    }
};



export function getAllActivities(){
    return async (dispatch) => {
        var json = await axios.get("http://localhost:3001/activity")
        // console.log('todas las actividades', json.data)
        return dispatch({
            type: 'GET_ALL_ACTIVITIES',
            payload: json.data
        })
    }
}

export function getCountriesName(name){
    return async function(dispatch){
        try {
           var json = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: 'GET_COUNTRY_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
            alert('Not found')
          
        }
    }
}

export function postActivity(payload) {
    console.log('payload',payload)
    return async function (dispatch) {
        try {
            var json = await axios.post("http://localhost:3001/activity", payload)
       
            dispatch({
                type: "POST_ACTIVITY",
                payload:json
            });
        } catch (error) {
            console.log(error)
            
        }
       
    }
};

export function deleteActivity(id){
    console.log('id actions', id)
    return async function(dispatch){
        try {
            var json = await axios.delete(`http://localhost:3001/activity/${id}`, id)

            dispatch({
                type: 'DELETE_ACTIVITY',
                payload:json.data

            })
        } catch (error) {
            
        }
    }
}

export function filterByContinent(payload){
    console.log('payload', payload)
 return {
    type: 'FILTER_BY_CONTINENT',
    payload
 }
}
// export const orderCont = (payload) => {
//     console.log(payload)
//     return {
//       type: 'ORD_CONTINENT',
//       payload,
//     };
//   };

export function filterByActivity(payload){
    //console.log('activity',payload)
    return {
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
}

export function orderByPopulation (payload){
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    }
    }
    
export function orderByAz (payload){
    return {
        type: 'ORDER_BY_AZ',
        payload
    }
}

// export function getCountryDetail(dispatch){
//     try {
//         const json = axios.get(`http://localhost:3001/country/${id}`); 
//         console.log('detalles',json.data)
//         return dispatch({
//             type: 'GET_COUNTRY_DETAILS',
//             payload: json.data
//         })
//     } catch (error) {
//         console.log('El getCountryDetail fallo')
//     }
    
// }

export function getCountryDetail(id){
    return async function(dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/country/${id}`)
            // console.log("anda?",json)
        return dispatch({type:'GET_COUNTRY_DETAILS' , payload: json.data,})
        }catch(error){
            console.log(error)
        }   
    }
}



export const cleanCountryDetail = () => {
    return {
        type: 'CLEAN_COUNTRY_DETAILS',
    }
}