import React, { useState } from 'react'

const Checkbox = () => {
    const [selectAllBox, setSelectAllBox] = useState(false)
    const [data, setData] = useState([
        {
            id: 1, name: 'Check box 1', checked: false
        },
        {
            id: 2, name: 'Check box 2', checked: false
        },
        {
            id: 3, name: 'Check box 3', checked: false
        },
        {
            id: 4, name: 'Check box 4', checked: false
        },
])

const handleChangeCheckBoxData = (id) => {
    const updatedCheckBox = data.map((item) =>
       item.id === id ?
       {...item, checked: !item.checked}
       :
       item
    )
    setData(updatedCheckBox)

}

const handleAllSelect = () => {
    const checkedData = data.map((item) =>  ({...item, checked: !item.checked}))
    setSelectAllBox(checkedData.every((item) => item.checked) ? true : false)
    setData(checkedData)
}

const showCheckCount = data.filter((d)=> d.checked).length



  return (
    <div>
        <div>
            {
                data.map((cBox) => {
                    return (
                        <div key={cBox.id}>
                           <input type="checkbox" style={{cursor: "pointer"}} checked= {cBox.checked} onChange={() => handleChangeCheckBoxData(cBox.id)} />
                             <label htmlFor="">{cBox.name}</label> 
                        </div>
                    )
                })
            }
        </div>
        {
            `Selected ${showCheckCount}`
        }
        <div>
           <button onClick={() => {handleAllSelect()}}>{selectAllBox ? 'Deselect all' :'Selected all'}</button>
        </div>
    </div>
  )
}

export default Checkbox