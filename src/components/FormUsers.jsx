import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defaultValues = {//Default Values se usa para poder reutilizar
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose}) => {

    useEffect(() => {
        //Se establece el if para evitar que se ejecute undefined en updateInfo ya que al primer renderizado no tendra informacion
        if(updateInfo){
            reset(updateInfo)
        }
    }, [updateInfo])    

    const {handleSubmit, reset, register} = useForm()

    const submit = data => {
        if(updateInfo){     
            //Update        
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            //Create        
            createNewUser(data)
        }        
        reset(defaultValues)//vacia el formulario
        setFormIsClose(true)
    }

    const handleCloseForm = () => {
        setFormIsClose(true)
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i onClick={handleCloseForm} className="form__x fa-regular fa-circle-xmark"></i>
        {/* Renderizado condicional para cambiar y mejorar la vista al usuario */}
        <h2 className='form__title'>{updateInfo ? 'Edit User' : 'New User'}</h2> 
        <div className='form__div'>
            <label className='form__label' htmlFor="email"> Email</label>
            <input className='form__input' placeholder='Enter your email' type="email" id="email" {...register('email')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="password"> Password</label>
            <input className='form__input' placeholder='Enter your password' type="password" id="password" {...register('password')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="first_name"> Firs Name</label>
            <input className='form__input' placeholder='Enter your first name' type="text" id="first_name" {...register('first_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">Last Name</label>
            <input className='form__input' placeholder='Enter your last mame' type="text" id="last_name" {...register('last_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="birthday"> Brithday</label>
            <input className='form__input' type="date" id="birthday" {...register('birthday')}/>
        </div>
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers