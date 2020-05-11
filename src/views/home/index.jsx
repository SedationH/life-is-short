import React from 'react'
import './home.scss'
import { useHistory } from "react-router-dom";

export default () => {
  let history = useHistory()

  function handleClick(e) {
    const t = e.target
    if (t.className === 'check') {
      history.push('/check')
    }else if(t.className === 'story'){
      history.push('/story')
    }
  }
  return (
    <div className="home-wrap">
      <div className="home-block one">
        <div className="text">
          Don't Waste your Time
        </div>
      </div>
      <div className="home-block two" onClick={handleClick}>
        <div className="check">小测试</div>
        <div className="story">聊一聊</div>
      </div>
    </div>
  )
}