import React from 'react'

const Increment = React.memo(({addCounts}) => {
    console.log('re render')
  return (
    <div>
        <button onClick={addCounts}>Add</button>
    </div>
  )
})

export default Increment