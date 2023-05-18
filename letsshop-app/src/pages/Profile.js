import React from 'react'
import Meta from '../components/Meta'
import profilepicture from '../images/profilepicture.jpg'

const Profile = () => {
  return <>
  <Meta title={"Hesabım"} />
  <div className='login-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
        <div className="profile-container">
      <div className="profile-sidebar">
        <img
          className="profile-picture"
          src={profilepicture}
          alt="Profile Picture"
        />
        <h2>Deniz</h2>
        <p>denizyildiz000@outlook.com</p>
        <button className="profile-edit-button">Profili Düzenle</button>
      </div>
      <div className="profile-content">
        <h1>Profil Bilgileri</h1>
        <div className="profile-info">
          <div className="profile-info-row">
            <label>Ad:</label>
            <span>Deniz</span>
          </div>
          <div className="profile-info-row">
            <label>Soyad:</label>
            <span>YILDIZ</span>
          </div>
          <div className="profile-info-row">
            <label>Telefon No:</label>
            <span>05362230168</span>
          </div>
          <div className="profile-info-row">
            <label>Adres:</label>
            <span>Antalya/Muratpaşa</span>
          </div>
        </div>
      </div>
    </div>
          
        </div>
      </div>
    </div>
  </div>
</>
}

export default Profile