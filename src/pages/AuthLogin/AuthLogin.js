import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginForm } from './components/LoginForm/LoginForm';

import './authLogin.scss';

export const AuthLogin = () => {
  return (
    <div className='page'>
      <div className='auth-login container h-100'>
        <div className='d-flex justify-content-center h-100'>
          <div className='user_card'>
            <div className='d-flex justify-content-center'>
              <div className='brand_logo_container'>
                <img src='/logo.svg' className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className='d-flex justify-content-center form_container'>
              <LoginForm />
            </div>
            <div className='mt-4'>
              <div className='d-flex justify-content-center links text-light'>
                ¿No tienes una cuenta?{' '}
                <NavLink to='/auth/signup' className='ml-2'>
                  Regístrate
                </NavLink>
              </div>
              <div className='d-flex justify-content-center links text-light'>
                <NavLink to='/auth/forgot'>¿Olvidé mi contraseña?</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
