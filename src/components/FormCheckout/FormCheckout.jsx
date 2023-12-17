import { TextField, Grid } from '@mui/material'
import React from 'react'
import "./FormCheckout.css"

const FormCheckout = () => {
  return (
    <div>
        <form action="">
      <Grid container spacing={0} className='gridContainer'>
          <Grid item  xs={10} md={8} >
          <TextField id="outlined-basic"
           label="Nombre"
            variant="outlined"
            fullWidth />
          </Grid>
          <Grid xs={10} md={8}>
          <TextField
           id="outlined-basic"
            label="Apellido"
            variant="outlined"
             fullWidth/>
          </Grid>
          <Grid xs={10} md={8}>
          <TextField 
          id="outlined-basic" 
          label="Contraseña"
           variant="outlined" 
          type='password'
           fullWidth/>
          </Grid>

      </Grid>
        </form>


    </div>
  )
}

export default FormCheckout