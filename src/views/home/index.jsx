import React from 'react'
import './home.scss'
import { useHistory } from "react-router-dom";
import { Button } from 'antd';

export default () => {
  let history = useHistory()

  function handleClick(e) {
    const t = e.target
    console.log(t)
    if (t.className.indexOf('check') !== -1) {
      history.push('/check')
    } else if (t.className.indexOf('story') !== -1) {
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
        <Button className="check" type="primary" block>
          Check
          </Button>
        <Button className="story" type="primary" block>
          Story
        </Button>
      </div>
    </div>
  )
}