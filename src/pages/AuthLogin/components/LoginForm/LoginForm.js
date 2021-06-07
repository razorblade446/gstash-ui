import React from 'react';
import { useForm } from '@hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './loginForm.scss';

export const LoginForm = () => {
  const { value: formValue, handleInputValue } = useForm({
    username: '',
    password: '',
  });

  return (
    <form className='login-form text-light'>
      <div className='input-group mb-3'>
        <div className='input-group-append'>
          <span className='input-group-text'>
            <FontAwesomeIcon icon='user' />
          </span>
        </div>
        <input
          type='text'
          name='username'
          className='form-control input_user'
          value={formValue.username}
          placeholder='Nombre de Usuario'
          onChange={handleInputValue}
        />
      </div>
      <div className='input-group mb-2'>
        <div className='input-group-append'>
          <span className='input-group-text'>
            <FontAwesomeIcon icon='key' />
          </span>
        </div>
        <input
          type='password'
          name='password'
          className='form-control input_pass'
          value={formValue.password}
          placeholder='Contraseña'
          onChange={handleInputValue}
        />
      </div>
      <div className='form-group'>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customControlInline'
          />
          <label className='custom-control-label' htmlFor='customControlInline'>
            Recordarme
          </label>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <button type='button' name='button' className='btn btn-primary'>
          Login
        </button>
      </div>
    </form>
  );
};
