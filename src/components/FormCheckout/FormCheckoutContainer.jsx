import { useContext, useState } from 'react'
import FormCheckout from './FormCheckout'
import {useFormik} from "formik"
import * as Yup from "yup"
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebaseConfig'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'


const FormCheckoutContainer = () => {

  const {cart, totalPrice, vaciarComprado} = useContext(CartContext)
  
  const [orderId, setOrderId] = useState(null)

  const checkoutFn = (data)=>{
    

    let total = totalPrice()
    
  let dataOrder = {
    buyer: data,
    items: cart,
    total: total,
    date: serverTimestamp()
  }

    const ordersCollection = collection(db,"orders")

    addDoc(ordersCollection, dataOrder)
    .then(res=> setOrderId(res.id))
    .catch(err => console.log(err))
    
    cart.map(product=>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity
      })
      )
    vaciarComprado()
   
  }

const {handleChange, handleSubmit, errors} = useFormik({
    initialValues:{
      nombre: "",
      email: "",
      contraseña:"",
      confirmContraseña:""
    },
    onSubmit: checkoutFn,
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
    <div>
      {
        orderId ? (<h2>Su orden con el ID: "{orderId}" ha sido procesada exitosamente</h2>) : ( 
      <FormCheckout handleChange={handleChange} handleSubmit={handleSubmit} errors = {errors}
      />
    )}
    </div>
  )
}

export default FormCheckoutContainer