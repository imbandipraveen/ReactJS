import React from 'react'
import '../Styles/styles.css'
function Count({text,count}) {
    console.log(`rendering ${text}`)
  return (
    <div>
        <button className='button button-count'>{count}</button>
    </div>
  )
}

export default React.memo(Count)