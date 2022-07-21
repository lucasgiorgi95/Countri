const axios = require('axios')
const {Country, Activity} = require('../db.js')


async function getCountriesApi(){
    const api = await axios.get('https://restcountries.com/v3/all')
    // console.log(api)
   
    const format = api.data.map((c) =>{
        const obj={
           id: c.cca3,
           name: c.name.common,
           flag: c.flags[1],
           capital: c.capital,
           continents:c.continents,
           region: c.region,
           subregion: c.subregion,
           area: c.area,
           population: c.population,
        }
        return obj
    })
    // console.log(format)
    const dataBase = await Country.findAll({includes:[{model: Activity}]})
    // console.log(dataBase)
   const allCountries =[...dataBase,...format]
   return allCountries

}
const getActivities = async () => {
    const get = await Activity.findAll()
    return get;
}

module.exports={getCountriesApi,getActivities}