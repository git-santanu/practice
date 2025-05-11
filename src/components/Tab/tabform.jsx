import { useState } from 'react'
import Profile from './profile'
import Interest from './interest'
import Setting from './setting'

const Tabform = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
        interests: [],
        themes: []
    })
    const tabs = 
    [
        {
        name: 'profile',
        component: Profile
        },
        {
        name: 'interest',
        component: Interest
        },
        {
        name: 'setting',
        component: Setting
        }
    ]

    const ActiveTabComponent = tabs[activeTab].component

  return (
    <div>
        <div className='tab-parent'>
            {tabs.map((t, idx) => {
                return (
                    <>
                    <div 
                    key={idx}
                    className='tab-heading'
                    onClick={()=>setActiveTab(idx)}
                    >{t.name}</div>
                    </>
                )
            })}
        </div>
        <div className='tab-body'><ActiveTabComponent data = {formValue} setData = {setFormValue}/> </div>
    </div>
  )
}

export default Tabform