import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'

const ResetPassword = () => {
  return <>
    <Meta title={"Reset Password"} />
    <Breadcrumb title="Reset Password" />
    <div className='login-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reset Password</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='password' name='password' placeholder='Password' className='form-control'></input>
                </div>
                <div>
                  <input type='password' name='confirmPassword' placeholder='Confirm Password' className='form-control'></input>
                </div>
                <div className='mt-1'>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button type='submit' className='button border-0'>Submit</button>
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

export default ResetPassword