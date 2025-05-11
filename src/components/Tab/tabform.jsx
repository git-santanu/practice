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
    const handleNext = () => {
        setActiveTab(prev => prev +1)
    }
    const handlePrevious = () => {
        setActiveTab(prev => prev -1)
    }
    const handleSubmit = () => {
       alert('Form Submitted Successfully!')
    }

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
        <div className="div">
            {
                activeTab === 0 && <button style={{cursor: 'pointer'}} onClick={handleNext}>Next</button>
            }
            {
                activeTab === 1 && <><button style={{cursor: 'pointer'}} onClick={handleNext}>Next</button>
                <button style={{cursor: 'pointer'}} onClick={handlePrevious}>Previous</button>
                </>
            }
            {
                activeTab === tabs.length - 1 && <><button style={{ cursor: 'pointer' }} onClick={handleSubmit}>Submit</button><button style={{ cursor: 'pointer' }} onClick={handlePrevious}>Previous</button></>
            }
        </div>
    </div>
  )
}

export default Tabform