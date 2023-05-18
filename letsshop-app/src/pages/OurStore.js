import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component"
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'

const OurStore = () => {
const [grid, setGrid] = useState(4);
return <>
    <div className='store-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Kategoriler
              </h3>
              <div>
                <ul className='ps-0'>
                  <li>Akıllı Saat</li>
                  <li>Tv</li>
                  <li>Kamera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Filtre
              </h3>
              <div>
                <h5 className='sub-title'>Stok Durumu</h5>
                <div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='' />
                    <label className='form-check-label' htmlFor="">Stokta (1)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='' />
                    <label className='form-check-label' htmlFor="">Tükenmiş (0)</label>
                  </div>
                </div>
                <h5 className='sub-title'>Fiyat</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="From" />
                    <label htmlFor="floatingInput">En Düşük</label>
                  </div>
                  <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="To" />
                    <label htmlFor="floatingInput1">En Yüksek</label>
                  </div>
                </div>
                <h5 className='sub-title'>Renk</h5>
                <div>
                 <Color />
                </div>
                <h5 className='sub-title'>Beden</h5>
                <div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='color-1' />
                    <label className='form-check-label' htmlFor="color-1">S (2)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='color-2' />
                    <label className='form-check-label' htmlFor="color-2">M (2)</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Ürün Etiketi
              </h3>
              <div>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Kulaklık</span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Kablosuz</span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Kablolu</span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                İlginizi Çekebilecek Ürünler
              </h3>
              <div>
                <div className='random-products mb-3 d-flex'>
                  <div className='w-50'>
                    <img  src='images/watch.jpg' className='img-fluid' alt='watch'/>
                  </div>
                  <div className='w-50'>
                    <h5>
                      Apple Watch Se Gps 44MM Silver Aluminium Case With White Sport Band - Regular MNK23TU/A
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>3770 ₺</b>
                  </div>
                </div>
                <div className='random-products d-flex'>
                  <div className='w-50'>
                    <img  src='images/watch.jpg' className='img-fluid' alt='watch'/>
                  </div>
                  <div className='w-50'>
                    <h5>
                      Apple Watch Se Gps 44MM Silver Aluminium Case With White Sport Band - Regular MNK23TU/A
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>3770 ₺</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
              <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-10'>
                <p className='mb-0 d-block ' style={{"width":"100px"}}>Sırala:</p>
                <select name='' className='form-control form-select' id=''>
                  <option value="best-selling" selected="selected">Çok Satanlar</option>
                  <option value="title-ascending">Alfabeye göre, A-Z</option>
                  <option value="title-descending">Alfabeye göre, Z-A</option>
                  <option value="price-ascending">Fiyat, düşükten yükseğe</option>
                  <option value="price-descending">Fiyat, yüksekten düşüğe</option>
                </select>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <p className='totalproducts mb-0'> 2 ürün listeleniyor</p>
                <div className='d-flex gap-10 align-items-center grid'>
                  <img  src='images/gr4.svg' 
                  onClick={() => {
                    setGrid(3)
                  }} 
                  className='d-block img-fluid' 
                  alt='grid' />
                  <img  src='images/gr3.svg' 
                   onClick={() => {
                    setGrid(4)
                  }}
                  className='d-block img-fluid' 
                  alt='grid' />
                  <img  src='images/gr2.svg'
                  onClick={() => {
                    setGrid(6)
                  }} 
                  className='d-block img-fluid'
                   alt='grid' />
                  <img  src='images/gr.svg' 
                  onClick={() => {
                    setGrid(12)
                  }}
                  className='d-block img-fluid' 
                  alt='grid' />
                </div>
              </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex gap-10 flex-wrap'>
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default OurStore