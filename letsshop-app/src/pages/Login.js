import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Login = () => {
  return <>
    <Meta title={"Giriş Yap"} />
    <div className='login-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Giriş Yap</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='email' name='email' placeholder='Email' className='form-control'></input>
                </div>
                <div>
                  <input type='password' name='password' placeholder='Şifre' className='form-control'></input>
                </div>
                <div className='mt-1'>
                  <Link to="/forgot-password">Şireni mi unuttun?</Link>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button type='submit' to="/" className='button border-0'>Giriş Yap</button>
                    <Link to="/signup" className='button signup'>Kayıt Ol</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Login