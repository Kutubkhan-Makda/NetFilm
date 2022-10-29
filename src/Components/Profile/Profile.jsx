import React from 'react'
import Header from '../Header/Header'
import './Profile.css'
import avtar from '../../Images/avtar.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Plans from '../Plans/Plans'

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Header/>
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src={avtar} alt='avtar'/>
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plan">
              <h3>Plans </h3>
              <Plans/>
              <button onClick={()=> auth.signOut()} className='profile_signout'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile