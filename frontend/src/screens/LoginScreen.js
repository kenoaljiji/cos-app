import React, {useContext, useEffect}  from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GlobalContext } from '../context/GlobalState';
import Spinner from '../components/Spinner';

// Validation with yup 
const schema = yup.object().shape({
        
        email: yup
            .string()
            .email()
            .required("Email is a required field"),
        password: yup
            .string()
            .required("Please enter your password")
    
});


const LoginScreen = ({location, history}) => {

    const { userInfo, userLogin,loading } = useContext(GlobalContext);
    


    const redirect = location.search ? location.search.split("=")[1] : '/women';

    useEffect(() => {
     
    if (userInfo) {
      history.push(redirect)
    } 
  }, [history, userInfo, redirect]);



    	const { register, handleSubmit, formState} = useForm({
         resolver: yupResolver(schema)
    });

    const { errors } = formState
    

    const onSubmit = (data) => {
       userLogin(data)
    }


    return (
        <div className='py-5 text-center'>
            {loading ? (<Spinner/>) : null}
            <h2>Sing In</h2> 
            <form className='form login' onSubmit={handleSubmit(onSubmit)}>

                <input
                    type='email'
                    placeholder='Enter Email'
                    name='email'
                  
                    {...register('email')}
                />
                <input
                    type='password'
                    placeholder='Enter Password'
                    name='password'
                   
                    {...register('password')}
                />
                <div>
                    <input
                    type='submit'
                    value={'Login'}
                    className='button'
                    />
                </div>
               
            </form>
        </div>
    )
}

export default LoginScreen
