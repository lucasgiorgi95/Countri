import React from 'react'
import './Country.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Receta({name, flag, subregion, region}) {
  return (
    <>
      {/* <div className='card'>
        <img className='img' src={flag} alt="Supuestamente soy una imagen" width='200px' heigth='250px'/>
        <h2>{name}</h2>
        <h3>{region}</h3>
        <h4>{subregion}</h4>
      </div> */}

      <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        alt="bandera"
        height="140"
        image={flag}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="h6" color="text.primary">
        {region}
        </Typography>
        <Typography variant="h7" color="text.primary">
        {subregion}
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default Receta