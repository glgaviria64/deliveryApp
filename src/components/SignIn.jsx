import React from 'react'
import { useForm } from 'react-hook-form'
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import {auth} from '../Firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'




const SignIn = () => {
  const navigate = useNavigate()
  const generateRecaptcha=() =>{
    try {
      window.recaptchaVerifier= new RecaptchaVerifier('recaptch-container', {
        'size': 'invisible',
        'callback': () => {
        }
      }, auth )
    } catch (error) {
      console.log(error)
    }
  }
  const sendCod = (number,recaptchaVerifier) =>{
    signInWithPhoneNumber(auth,number, recaptchaVerifier)
    .then((response)=>{
      window.confirmationResult = response;
      Swal.fire('Excelente', `Te enviaremos un mensaje para confirmar`, 'success').then(()=>{
       navigate("/codeverificaction")
      })
      })
      .catch((error)=> {
        console.log(error)
        Swal.fire('Ops!', `Ocurrió un error al realizar tu solicitud ${error.message}`, 'error')
      })
  }
    const {register,handleSubmit } = useForm()
    const onSubmit = (data) => { 
       generateRecaptcha()
       const verifierApp=window.recaptchaVerifier
       sendCod(`+57${data.number}`,verifierApp)
      }

  return (
    <div>
 <form onSubmit ={handleSubmit(onSubmit)}> 
    <h1>
        Ingresa un número 
    </h1>
    <input {...register("number")}
        type="text" placeholder='Ingresa un número de celular'/> 
    <button type="submit"> Login </button>

    </form>    
 <div id='recaptch-container'>
  
 </div>


    </div>
  )
}

export default SignIn
