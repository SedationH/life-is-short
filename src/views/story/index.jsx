import React from 'react'
// import pic1 from '../../assets/img/pic1.png'
// import pic2 from '../../assets/img/pic2.png'
// import pic3 from '../../assets/img/pic3.png'
// import pic4 from '../../assets/img/pic4.png'
import './story.scss'
import { Impress, Step } from 'react-impressjs';

export default () => {
  return (
    <div className="story">
      <Impress fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}>
        <Step
          data={{
            x: 0,
            y: -1500
          }}
        >
          This is slide 2
        </Step>
        <Step
          data={{
            x: 1000,
            y: -1500
          }}
        >
          This is slide 3
        </Step>
        <Step
          id={'overview'}
          data={{
            x:0,
            y:0,
            scale: 4
          }} />
      </Impress>
    </div >
  )
}

/*
<div className="header">
        别说来日方长
      </div>
      <div className="section">
        <div className="text">
          你是否，也时常听到身边的人感叹
          时间都去哪了
          还没好好感受年轻就老了
          ……
          是啊，时间都去哪了？
          下面我们将用人生表格A4纸去将看不到摸不着的时间去量化处理
          据相关资料显示，我国公民平均寿命为77岁
          在一张A4纸画一个30×30的表格，就足够了。每过一个月，在一个格子里涂掉，全部人生就在这张纸上。
        </div>
        <div className="pic">
        </div>
      </div>
      <div className="section">
        <div className="text">
          如果你今年20岁，你的人生是这样的：
        </div>
        <div className="pic">
          <img src={pic1} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text">
          如果你是一位30岁上下的心力交瘁的上班族，你的人生是这样的：
        </div>
        <div className="pic">
          <img src={pic2} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text">
          如果你年过半百，你的人生将是这样的：
        </div>
        <div className="pic">
          <img src={pic3} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="text">
          如果你70岁了，你的人生又是这样的：
        </div>
        <div className="pic">
          <img src={pic4} alt="" />
        </div>
      </div>
*/