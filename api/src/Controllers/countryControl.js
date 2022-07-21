const axios = require('axios')
const {Country, Activity} = require('../db.js')
const {getCountriesApi} = require ('../Controllers/index.js')


const country = async (req, res)=>{
    const{name} = req.query
    let allCountries = await getCountriesApi()
    try {
       if(name){
          let cuontrieName = allCountries.filter((e)=> e.name.toLowerCase().includes(name.toLowerCase()))
          if(cuontrieName.length){
             res.status(200).send(cuontrieName)
          }else{
             res.status(404).send('Pais no existente')
          }
       }else{
          res.status(200).send(allCountries)
       }
    } catch (error) {
       console.log(error)
    }
  }


 const countryId = async (req, res)=>{
    const{id}=req.params
    let allCountries = await getCountriesApi()
    try {
       if(id){
          let countries =  allCountries.filter(e => e.id == id.toUpperCase())
          countries.length?
          res.status(200).send(countries):
          res.status(404).send('Pais no encontrado')
       }
    } catch (error) {
       console.log(error)
    }
  }

  module.exports={
    country,
    countryId,
  }