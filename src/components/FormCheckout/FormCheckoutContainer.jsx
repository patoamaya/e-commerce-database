import React from 'react'
import FormCheckout from './FormCheckout'
import {useFormik} from "formik"
import * as Yup from "yup"

const FormCheckoutContainer = () => {

const {handleChange, handleSubmit, errors} = useFormik({
    initialValues:{
      nombre: "",
      email: "",
      contraseña:"",
      confirmContraseña:""
    },
    onSubmit: (data)=>{
      console.log(data)
      
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es obligatorio").min(3, "La cantidad de carácteres mínima es 3"),
      email: Yup.string().email("Debe proporcionar un Email válido").required("Este campo es obligatiorio"),
      contraseña: Yup.string().required("Este campo es obligatorio")
      .matches(/^(?=.*[a-z])(?=.*\d)(?=.*[A-Z]).{6,15}$/, {
        message:"La contraseña debe tener al menos 1 mayuscula, 1 minuscula, 1 numero y contener entre 6 y 15 caracteres"
    }),
      confirmContraseña: Yup.string().required("Este campo es obligatorio")
      .oneOf([Yup.ref("contraseña")], "Las contraseñas deben coincidir")
      }),
    validateOnChange: false,
})
console.log(errors)

  return (
    <div><FormCheckout handleChange={handleChange} handleSubmit={handleSubmit} errors = {errors}/></div>
  )
}

export default FormCheckoutContainer