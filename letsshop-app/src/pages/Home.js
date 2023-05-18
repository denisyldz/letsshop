import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
function Home() {
  return <>
    <Meta title="Let'sShop"/>
    <section className='home-wrapper-l py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img
                src='images/main-banner-1.jpg'
                className='img-fluid rounded-3'
                alt='main banner' />
              <div className='main-banner-content position-absolute '>
                <h4>UZUN ÖMÜRLÜ ŞARJ</h4>
                <h5>iPhone 10+ Pro.</h5>
                <p>19,999 ₺ 'den  <br /> başlayan fiyatlarla</p>
                <Link className='button'>SATIN AL</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-01.jpg'
                  className='img-fluid rounded-3'
                  alt='small banner' />
                <div className='small-banner-content position-absolute '>
                  <h4>YENİ GELENLER</h4>
                  <h5>Mackbook Air M1</h5>
                  <p>39,999 ₺ 'den  <br /> başlayan fiyatlarla</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-02.jpg'
                  className='img-fluid rounded-3'
                  alt='small banner' />
                <div className='small-banner-content position-absolute '>
                  <h4>YENİ GELENLER</h4>
                  <h5>Apple Watch</h5>
                  <p>9,999 ₺ 'den  <br /> başlayan fiyatlarla</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-03.jpg'
                  className='img-fluid rounded-3'
                  alt='small banner' />
                <div className='small-banner-content position-absolute '>
                  <h4>YENİ GELENLER</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>29,999 ₺ 'den  <br /> başlayan fiyatlarla</p>

                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-04.jpg'
                  className='img-fluid rounded-3'
                  alt='small banner' />
                <div className='small-banner-content position-absolute '>
                  <h4>YENİ GELENLER</h4>
                  <h5>AirPods Max</h5>
                  <p>9,999 ₺ 'den  <br /> başlayan fiyatlarla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service.png' alt='services' />
                <div>
                  <h6>Ücretsiz Kargo</h6>
                  <p className='mb-0'>100 ₺ ve üstü alışverişlere</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-02.png' alt='services' />
                <div>
                  <h6>Süpriz Teklifler</h6>
                  <p className='mb-0'>500₺'ye varan indirimler</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-03.png' alt='services' />
                <div>
                  <h6>7/24 Destek Hattı</h6>
                  <p className='mb-0'>Uzman kişilerle alışveriş keyfi</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-04.png' alt='services' />
                <div>
                  <h6>Uygun Fiyatlar</h6>
                  <p className='mb-0'>Her cebe uygun fiyatlar</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-05.png' alt='services' />
                <div>
                  <h6>Güvenli Ödeme</h6>
                  <p className='mb-0'>3D Secure ödeme seçeneği </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='feature-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Öne Çıkanlar</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-1.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Büyük Ekran</h5>
                <h6>Smart Watch Serisi 7</h6>
                <p>4999 ₺'den başlayan fiyatlarla <br />12 aya varan taksitlerle</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-3.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-black'>Akıllı Telefonlar</h5>
                <h6 className='text-black'>Apple 13 Pro.</h6>
                <p className='text-black'>Şimdi farklı renk çeşitleriyle.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-4.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-black'>Hoparlörler</h5>
                <h6 className='text-black'>Evinizin her yerinden duyabileceğiniz hoparlörler</h6>
                <p className='text-black'>2999₺ 'den başlayan fiyatlarla</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-2.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-black'>Geliştirilmiş ekran kartı</h5>
                <h6 className='text-black'>Yüksek parlaklık</h6>
                <p className='text-black'>27 inç 5K Retina görüntüsü</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>İndirimli Ürünler</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>
    </section>
    <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Çok Satan Ürünler</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex '>
                <div className='mx-4 w-25'><img src='images/brand-01.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-02.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-03.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-04.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-05.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-06.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-07.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-08.png' alt='brand' /></div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Home