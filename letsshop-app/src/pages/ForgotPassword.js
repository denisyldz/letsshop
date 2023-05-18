import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'

const ForgotPassword = () => {
  return <>
    <Meta title={"Forgot Password"} />
    <Breadcrumb title="Forgot Password" />
    <div className='login-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <p className='text-center mt-2 mb-3'> We will send you an email to reset your password</p>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='email' name='email' placeholder='Email' className='form-control'></input>
                </div>
                <div className='mt-1'>
                  <div className='mt-3 d-flex justify-content-center flex-column align-items-center gap-15'>
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link to="/login" >Cancel</Link>
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

export default ForgotPassword