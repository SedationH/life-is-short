import React from 'react'
import { DatePicker } from 'antd';
import format from 'date-fns/format'

import './choose.scss'



export default (props) => {
  function onChange(date, dateString) {
    console.log(dateString);
    let now = format(Date.now(), 'yyyy-MM-dd')
    console.log('now', now)
    let res = (new Date(now).getTime() - new Date(dateString).getTime()) / 1000 / 60 / 60 / 24
    props.setDate((res/7)+1)
  }
  return (
    <div className="choose-wrap">
      <div className="first-line">
        <div className="choose-text">
          <span>输入你的破蛋日</span>
          <span role="img" aria-label="star">✨</span></div>
        <DatePicker onChange={onChange} autoFocus className="choose-data" />
      </div>
      <div className="second-line">
        <span role="img" aria-label="japanese">🇯🇵</span>
        <span>日本是世界平均寿命最高的国家，84.2，乐观些，我们假设80为全球人均寿命</span>
      </div>
    </div>
  )
}