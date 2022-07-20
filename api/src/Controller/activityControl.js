const axios = require('axios')
const {Country, Activity} = require('../db.js')
const {getActivities} = require('./index.js')


const activity = async (req, res)=>{
    const activities = await getActivities()
    res.status(200).send(activities)
}

const activityPost = async (req, res)=>{
    let {name, description, difficulty, duration, season, countries} = req.body;
    let activityCreated = await Activity.create({
        name,
        description,
        difficulty,
        duration,
        season,
    })
    let countriesDb = await Country.findAll({
        where:{name: countries}
    })
    activityCreated.addCountry(countriesDb)
    res.send("Activity created")
}

module.exports={
    activity,
    activityPost
}