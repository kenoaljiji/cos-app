import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation with yup
const schema = yup.object().shape({
  firstname: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),

  lastname: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),

  email: yup.string().email().required('Email is a required field'),
  message: yup.string().min(3, 'Name must be at least 3 characters'),
});

const ContactScreen = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  /*   const { errors } = formState; */

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='py-5 text-center'>
      <h2>Do you have a question ?</h2>
      <form className='form contact' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='First Name'
          name='firstname'
          {...register('firstname')}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastname'
          {...register('lastname')}
        />
        <input
          type='email'
          placeholder='Enter Email'
          name='email'
          {...register('email')}
        />
        <textarea
          type='text'
          placeholder='Enter a message'
          name='message'
          {...register('message')}
        />

        <div>
          <input type='submit' value={'Send'} className='button' />
        </div>
      </form>
    </div>
  );
};

export default ContactScreen;
