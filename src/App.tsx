import React from 'react'
import { WIDTH } from './utilities/constants'


const App = () => {
    return (
      <div style={{width:'100%',minWidth:`${WIDTH.desktop}`,display:'flex',justifyContent:'center'}}>
          {WIDTH.desktop}
      </div>
    )
  }
  
  export default App
  