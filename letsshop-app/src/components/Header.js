import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { BiGitCompare } from 'react-icons/bi'
import { MdFavorite } from 'react-icons/md'
import { GrLogin } from 'react-icons/gr'
import {CgProfile} from "react-icons/cg"

const Header = () => {
  return <>
    <header className='header-top-strip py-3'>
    
    </header>
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-2'>
            <h2>
              <Link to="/" className='title-orange'>Let'sShop</Link>
            </h2>
          </div>
          <div className='col-5'>
            <div className="input-group">
              <input type="text"
                className="form-control py-2"
                placeholder="Ara.."
                aria-label="Ara.."
                aria-describedby="basic-addon2" />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className='fs-6' />
              </span>
            </div>
          </div>
          <div className='col-5'>
            <header className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'>
                  <BiGitCompare className='text-dark ' size="2em" />
                  <p className='mb-0 title-orange'>
                    Ürün <br /> Karşılaştır
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                  <MdFavorite className="text-dark" size="2em" />
                  <p className='mb-0 title-orange'>
                    Favoriler
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
                  <GrLogin size="2em" />
                  <p className='mb-0 title-orange'>
                    Giriş <br /> Yap
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/profile" className='d-flex align-items-center gap-10 text-white'>
                  <CgProfile className='text-dark' size="2em" />
                  <p className='mb-0 title-orange'>
                    Hesabım <br />
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                  <img src='/images/cart.svg' alt='cart' />
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge text-white bg-dark text-white'>1</span>
                    <p className='mb-0 text-dark'> 5000 ₺ </p>
                  </div>
                </Link>
              </div>
            </header>
          </div>
        </div>
      </div>
    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
            <div className='menu-links'>
                <div className='me-10 d-flex align-items-center gap-15'>
                </div>
              </div>
              <div>
                <div className="dropdown ">
                  <button 
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                  type="button" 
                  id="dropdownMenuButton1" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  >
                  <span className='me-5 d-inline-block'>Elektronik Eşya</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to="/product" className="dropdown-item text-white" >Bilgisayar & Laptop</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Telefon</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Kulaklık</Link></li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="dropdown">
                  <button 
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                  type="button" 
                  id="dropdownMenuButton1" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  >
                  <span className='me-5 d-inline-block'>Kadın Giyim</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to="/product">Elbise</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Bluz</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Ayakkabı</Link></li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="dropdown">
                  <button 
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                  type="button" 
                  id="dropdownMenuButton1" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  >
                  <span className='me-5 d-inline-block'>Erkek Giyim</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to="/product">Gömlek</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Pantolon</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Ayakkabı</Link></li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="dropdown">
                  <button 
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                  type="button" 
                  id="dropdownMenuButton1" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  >
                  <span className='me-5 d-inline-block'>Ev Eşyası</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to="/product">Süpürge</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Buzdolabı</Link></li>
                    <li><Link className="dropdown-item text-white" to="/product">Koltuk</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header