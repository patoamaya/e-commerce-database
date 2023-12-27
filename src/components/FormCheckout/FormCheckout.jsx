import { TextField, Grid, Button } from '@mui/material'
import React from 'react'
import "./FormCheckout.css"

const FormCheckout = ({handleChange, handleSubmit, errors}) => {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
      <Grid container spacing={0} className='gridContainer'>
          <Grid item  xs={10} md={8} >
          <TextField id="outlined-basic"
           label="Nombre"
            variant="outlined"
            name='nombre'
            fullWidth
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
            onChange={handleChange}
           />
          </Grid>
          <Grid item xs={10} md={8}>
          <TextField
           id="outlined-basic"
            label="Email"
            variant="outlined"
            name='email'
            error={errors.email ? true : false}
            helperText={errors.email}
            onChange={handleChange}
             fullWidth/>
          </Grid>
          <Grid item xs={10} md={8}>
          <TextField 
          id="outlined-basic" 
          label="Contraseña"
           variant="outlined" 
          type='password'
          name='contraseña'
          error={errors.contraseña ? true : false}
          helperText={errors.contraseña}
          onChange={handleChange}
           fullWidth/>
          <TextField 
          id="outlined-basic" 
          label="Confirmar Contraseña"
           variant="outlined" 
          type='password'
          name='confirmContraseña'
          error={errors.confirmContraseña ? true : false}
          helperText={errors.confirmContraseña}
          onChange={handleChange}
           fullWidth/>
          </Grid>
          <Grid item xs={10} md={8} >
          <Button color="primary" variant="contained" className='btnCompra' type='submit' >
            Comprar            
          </Button>
          </Grid>
           

      </Grid>
        </form>


    </div>
  )
}

export default FormCheckout