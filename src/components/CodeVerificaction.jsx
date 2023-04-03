import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {  verifyCodeAsync } from '../redux/actions/userActions'

const CodeVerificaction = () => {
    const {register,handleSubmit } = useForm()
    const dispatch= useDispatch()
    const onSubmit = (data) => {dispatch( verifyCodeAsync(data.code)) }


  return (
    <div>
 <form onSubmit ={handleSubmit(onSubmit)}> 
    <h1>
        Ingresa el código de verificación
    </h1>
    <input {...register("code")} minLength={6}
        type="text" placeholder='Ingresa código'/> 
            <button type="submit"> Login </button>

    </form>    
    </div>

  )
}

export default CodeVerificaction
