import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

const Signup = () => {
  return <>
    <Meta title={"Kayıt Ol"} />
    <div className='login-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Hesap Oluştur</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' name='firstName' placeholder='Ad' className='form-control'></input>
                </div>
                <div>
                  <input type='text' name='lastName' placeholder='Soyad' className='form-control'></input>
                </div>
                <div>
                    <input type='tel' className='form-control' placeholder='Telefon Numarası' />
                </div>
                <div>
                  <input type='email' name='email' placeholder='Email' className='form-control'></input>
                </div>
                <div>
                  <input type='password' name='password' placeholder='Şifre' className='form-control'></input>
                </div>
                <div className='mt-1'>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button type='submit' className='button border-0'>Kayıt Ol</button>
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

export default Signup