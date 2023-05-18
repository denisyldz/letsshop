import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import watch from '../images/watch.jpg'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
  return <>
    <Meta title={"Sepetim"} />
    <section className='cart-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
              <h4 className='cart-col-1'>Ürün</h4>
              <h4 className='cart-col-2'>Fiyat</h4>
              <h4 className='cart-col-3'>Miktar</h4>
              <h4 className='cart-col-4'>Toplam</h4>
            </div>
            <div className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
              <div className='cart-col-1 gap-15 d-flex align-items-center'>
                <div className='w-25'>
                  <img src={watch} className='img-fluid' alt='product image' />
                </div>
                <div className='w-75'>
                  <p>Apple Watch</p>
                  <p>1 adet</p>
                  <p>Renk: Beyaz</p>
                </div>
              </div>
              <div className='cart-col-2'>
                <h5 className='price'>10770 ₺</h5>
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                <div ><input min={1} max={10} name='' id='' type='number' /></div>
                <div>
                  <AiFillDelete className='text-danger' />
                </div>
              </div>
              <div className='cart-col-4'>
                <h5 className='price'>10770 ₺</h5>
              </div>
            </div>
            <div className='col-12 py-2 mt-4'>
              <div className='d-flex justify-content-between align-items-baseline'>
                <Link to="/product" className='button'>Alışverişe Devam Et</Link>
              <div className='d-flex align-items-end flex-column'>
                <h5>Toplam: 10770₺</h5>
                <p>Kargo ve taksit işlemleri ödeme sayfasında yapılacaktır</p>
                <Link to="/checkout" className='button'>Ödeme Yap</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Cart