import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Let'sShop</h3>
              <h4 className="title total">İletişim Bilgileri</h4>
              <p className="user-details total">
                Deniz YILDIZ (denizyildiz000@outlook.com)
              </p>
              <h4 className="mb-3">Adres Bilgileri</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Ülke
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Ad"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Soyad"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Adres"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="İl"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      İlçe
                    </option>
                  </select>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Sepete Geri Dön
                    </Link>
                    <Link to="/cart" className="button">
                      Ödemeye Devam Et
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">Apple Watch</h5>
                    <p className="total-price">1 adet / Beyaz</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">10770 ₺</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Ara Toplam</p>
                <p className="total-price">10770 ₺</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Kargo</p>
                <p className="mb-0 total-price">Bedava</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Toplam</h4>
              <h5 className="total-price">10770 ₺</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
