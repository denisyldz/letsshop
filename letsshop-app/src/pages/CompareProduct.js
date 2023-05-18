import React from 'react'
import Color from '../components/Color'
import Meta from '../components/Meta'

const CompareProduct = () => {
  return <>
    <Meta title={"Ürün Karşılaştır"} />
    <div className='compare-product-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='product-card-image'>
                <img src='images/watch.jpg' className='w-100' alt='watch' />
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Apple Watch</h5>
                <h6 className='price mb-3 mt-3'>9990 ₺</h6>
                <div>
                  <div className='product-detail'>
                    <h5>Marka:</h5>
                    <p>Apple</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Kategori:</h5>
                    <p>Akıllı Saat</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Stok Durumu:</h5>
                    <p>Stokta Var</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Renk:</h5>
                    <Color />
                  </div>
                  {/* <div className='product-detail'>
                    <h5>Size:</h5>
                    <div className='d-flex gap-10'>
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='product-card-image'>
                <img src='images/watch.jpg' className='w-100' alt='watch' />
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Apple Watch</h5>
                <h6 className='price mb-3 mt-3'>9990 ₺</h6>
                <div>
                  <div className='product-detail'>
                    <h5>Marka:</h5>
                    <p>Apple</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Kategori:</h5>
                    <p>Saat</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Stok Durumu:</h5>
                    <p>Stokta Var</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Renk:</h5>
                    <Color />
                  </div>
                  {/* <div className='product-detail'>
                    <h5>Size:</h5>
                    <div className='d-flex gap-10'>
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default CompareProduct