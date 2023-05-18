import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsInstagram, BsShop } from 'react-icons/bs'

const Footer = () => {
  return <>
   <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <BsShop className='text-white' size="3em" />
                <h2 className="mb-0 text-white">Let'sShop</h2>
              </div>
            </div>
            <div className="col-7">
            </div>
          </div>
        </div>
      </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-7'>
          </div>
        </div>
      </div>  
    </footer>  
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Bize Ulaşın</h4>
            <div>
              <a href='tel: +90 536 223 01 68' className='mt-3 d-block mb-1 text-white'>+90 536 223 01 68</a>
              <a href='denizyildiz000@outlook.com' className='mt-2 d-block mb-0 text-white'>denizyildiz000@outlook.com</a>
            <div className='social_icons d-flex align-items-center gap-30 mt-4'>
              <a className='text-white ' href='https://www.linkedin.com/in/deniz-y%C4%B1ld%C4%B1z-9548b4231/'>
                <BsLinkedin className='fs-4'/>
              </a>
              <a className='text-white ' href='https://github.com/denisyldz'>
                <BsGithub className='fs-4' />
              </a>
              <a className='text-white ' href='https://www.instagram.com/denisyldzz/'>
                <BsInstagram className='fs-4' />
              </a>
            </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Bilgi İçin</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Gizlilik Sözleşmesi</Link>
              <Link className='text-white py-2 mb-1'>İade Sözleşmesi</Link>
              <Link className='text-white py-2 mb-1'>Kargo Sözleşmesi</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Hesap</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Hakkımızda</Link>
              <Link className='text-white py-2 mb-1'>FAQ</Link>
              <Link className='text-white py-2 mb-1'>İletişim</Link>
            </div>
          </div>
        </div>
      </div>  
    </footer>  
    <footer className='py-4'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center mb-0 text-white'> &copy; { new Date().getFullYear()}; Powered by Let'sShop</p>
        </div>
      </div>
    </footer>  
  </>
}

export default Footer