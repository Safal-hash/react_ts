import React, { useState } from 'react'

const Test = () => {


  const [count, setCount] = useState(false);
  return (
    <div className='Card'>
      <h2>Click the button below lil bro</h2>
      <button onClick={()=>setCount(!count)}> 
        {count ? "randi" : "🤍"} 
      </button>
    </div>
  )
}





export default Test