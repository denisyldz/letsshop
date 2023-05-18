import React, { useState } from 'react'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from "react-image-zoom"
import Color from '../components/Color'
import {TbGitCompare } from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
const SingleProduct = () => {
  const props = {width: 500, height:500, zoomWidth:500, img:"https://productimages.hepsiburada.net/s/337/550/110000312373282.jpg/format:webp"}
  const [orderedProduct, setOrderedProduct] = useState(true)
  return <>
    <Meta title={"Ürün Adı"} />
    <div className='main-product-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-product-image'>
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className='other-product-images d-flex flex-wrap gap-15'>
              <div><img className='img-fluid' src='https://productimages.hepsiburada.net/s/337/550/110000312373282.jpg/format:webp' /></div>
              <div><img className='img-fluid' src='https://productimages.hepsiburada.net/s/337/550/110000312369137.jpg/format:webp' /></div>
              <div><img className='img-fluid' src='https://productimages.hepsiburada.net/s/337/1100/110000275066923.jpg/format:webp' /></div>
              <div><img className='img-fluid' src='https://productimages.hepsiburada.net/s/337/550/110000312362247.jpg/format:webp' /></div>
            </div>
          </div>
          <div className='col-6'>
            <div className='main-product-details'>
              <div className='border-bottom'>
                <h3 className='title'>Apple Watch Se Gps 44MM Silver Aluminium Case With White Sport Band - Regular MNK23TU/A</h3>
              </div>
              <div className='border-bottom py-3'>
                <p className='price'>9999.00 ₺</p>
                <div className='d-flex align-items-center gap-10'>
                <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='t-review mb-0'>(2 Değerlendirme)</p>
                </div>
                <a className='review-btn' href='#review'>Değerlendir</a>
              </div>
              <div className='border-bottom py-3'>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Kategori:</h3> <p className='product-data'>Saat</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Marka:</h3> <p className='product-data'>Apple</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Etiketler:</h3> <p className='product-data'>Akıllı Saat, Saat</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Stok Durumu:</h3> <p className='product-data'>Stokta Var</p>
                </div>
                {/* <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                  <h3 className='product-heading'>Size:</h3>
                  <div className='d-flex flex-wrap gap-15'>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                  </div>
                </div> */}
                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                  <h3 className='product-heading'>Renk:</h3>
                  <Color />
                </div>
                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                  <h3 className='product-heading'>Adet:</h3>
                  <div className=''>
                    <input className='form-control' type='number' name='' style={{width:"70px"}} min={1} max={10}></input>
                  </div>
                  <div className='d-flex align-items-center gap-30 ms-5'>
                    <button type='submit' className='button border-0'>Sepete Ekle</button>
                    <button className='button signup'>Satın Al</button>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <a href='#'>
                      <TbGitCompare className='fs-5 me-2'/> 
                      Karşılaştırma İçin Ekle</a>
                  </div>
                  <div>
                    <a href='#'>
                      <AiOutlineHeart className='fs-5 me-2' />
                      Favorilere Ekle</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='description-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <h4>Ürün Bilgisi</h4>
            <div className='bg-white p-3'>
              <p>
                Üç muhteşem kasa rengi. Sağlık ve zindelik durumunuz hakkında bilgiler veren güçlü sensörler. Yenilik dolu güvenlik özellikleri. Bağlantıda kalmanın pratik yolları. Daha iyi performans için daha da hızlı çift çekirdekli işlemci. Özelliklerle dolu Apple Watch SE şimdi her zamankinden de uygun bir fiyatla sunuluyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='reviews-wrapper home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 id='review'>Değerlendirmeler</h3>
            <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Müşteri Yorumları</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0'>2 değerlendirme üzerinden</p>
                  </div>
                </div>
                {orderedProduct &&
                  <div>
                    <a className='text-dark text-decoration-underline' href=''>Değerlendir</a>
                  </div>
                }
              </div>
              <div className='review-form py-4'>
                <h4>Değerlendir</h4>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                  </div>
                  <div>
                    <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Yorum yaz' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button border-0'>Gönder</button>
                  </div>
                </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                 <div className='d-flex gap-10 align-items-center'>
                  <h6 className='mb-0'>Deniz</h6>
                  <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                  />
                 </div>
                  <p className='mt-3'>Gerçekten hayran kaldığım bir ürün oldu.</p>
                </div>
                <div className='review'>
                 <div className='d-flex gap-10 align-items-center'>
                  <h6 className='mb-0'>Deniz</h6>
                  <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                  />
                 </div>
                  <p className='mt-3'>Umarım stoklar yenilenir çünkü kardeşime de alacağım!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className='popular-wrapper py-5 home-wrapper-2'>
    </section>
  </>
}

export default SingleProduct