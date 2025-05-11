import React from 'react'

const Setting = ({data, setData}) => {
    const {themes} = data
    const handleChange = (e) => {
        setData(prev=> ({
            ...prev,
            themes: [...themes,e.target.name]
        }))
    }
  return (
    <div>
        <input type="radio" style={{cursor: "pointer"}} name='dark' checked = {themes.includes('dark')} onChange={handleChange} />
        <label>Dark</label>
         <input type="radio" style={{cursor: "pointer"}} name='light' checked = {themes.includes('light')} onChange={handleChange} />
        <label>Light</label>
    </div>
  )
}

export default Setting