import React from 'react'

const Profile = ({data, setData}) => {
    const handleChangeData = (value, field) => {
        setData(prev => ({
            ...prev,
            [field]:value
        }))
    }
  return (
    <div>
        <div className='profile-body'>
            <label>Name: </label>
            <input type='text' value={data.name} onChange={(e) => handleChangeData(e.target.value, 'name')}/>
            <label>Email: </label>
            <input type='email' value={data.email} onChange={(e) => handleChangeData(e.target.value, 'email')}/>
            <label>Password: </label>
            <input type='password' value={data.password} onChange={(e) => handleChangeData(e.target.value, 'password')}/>
        </div>
    </div>
  )
}

export default Profile