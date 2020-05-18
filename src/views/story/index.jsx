import React from 'react'
import pic1 from '../../assets/img/pic1.png'
import pic2 from '../../assets/img/pic2.png'
import pic3 from '../../assets/img/pic3.png'
import pic4 from '../../assets/img/pic4.png'
import pic5 from '../../assets/img/pic5.png'
import pic6 from '../../assets/img/pic6.png'
import pic7 from '../../assets/img/pic7.png'
import pic8 from '../../assets/img/pic8.png'
import pic9 from '../../assets/img/pic9.png'
import pic10 from '../../assets/img/pic10.png'
import mpic from '../../assets/img/mpic.png'
import m1 from '../../assets/music/m1.mp3'
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

import './story.scss'
import { Impress, Step } from 'react-impressjs';

import ReactAplayer from 'react-aplayer';

const musciSetting = {
  mini: true,
  audio: [
    {
      url: m1,
      cover: mpic
    }
  ]
};


export default () => {
  let history = useHistory()

  function handleBack() {
    history.push('/')
    window.location.reload()
  }
  return (
    <div className="story">
      <div className="back">
        <Button type="primary" block onClick={handleBack}>
          返回
        </Button>
      </div>
      <ReactAplayer
        {...musciSetting}
      />
      <Impress fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}>
        <Step className="title" data={{ x: 1350, y: -2000, rotateX: 180 }}>
          别说来日方长
          <div className="notice">
          (使用 -> or 空格浏览，左上角
            <span role="img" aria-label="music">🎵</span>
          点击播放)
          </div>
        </Step>
        <Step className="intro" data={{ x: 1350, y: -1000 }}>
          <p> 你是否，也时常听到身边的人感叹
          时间都去哪了
          还没好好感受年轻就老了
          ……</p>
          <p>是啊，时间都去哪了？
          下面我们将用人生表格A4纸去将看不到摸不着的时间去量化处理
          据相关资料显示，我国公民平均寿命为77岁</p>
          <p>在一张A4纸画一个30×30的表格，就足够了。每过一个月，在一个格子里涂掉，全部人生就在这张纸上。</p>
          <div className="goin" ><span role="img" aria-label="paper">📃</span></div>
        </Step>
        <Step className="slide" data={{ x: 1270, y: -900, scale: 0.1 }}>
          <div className="text">
            如果你今年20岁，你的人生是这样的：
        </div>
          <div className="pic">
            <img src={pic1} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1400, y: -900, scale: 0.1 }}>
          <div className="text">
            如果你是一位30岁上下的心力交瘁的上班族，你的人生是这样的：
        </div>
          <div className="pic">
            <img src={pic2} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1270, y: -800, scale: 0.1 }}>
          <div className="text">
            如果你年过半百，你的人生将是这样的：
        </div>
          <div className="pic">
            <img src={pic3} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1400, y: -800, scale: 0.1 }}>
          <div className="text">
            如果你70岁了，你的人生又是这样的：
        </div>
          <div className="pic">
            <img src={pic4} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1330, y: -850, scale: 0.1, rotateY: 180 }}>
          <div className="text">
            如果你谈了6个月的恋爱失恋了，你认为未来没有他/她是灰暗的，但是将它放在人生时间A4纸里，你会发现这根本不算什么，你还有很长的路要走。
            你要学会享受、不逃避，爱与人生都需要漫长的领会和成长。
           </div>
          <div className="pic">
            <img src={pic5} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1330, y: -850, scale: 0.1, rotateY: 180 }}>
          <div className="text">
            我们的父母结婚生子便有了我们，在我们上幼儿园前，我们与父母朝夕相处的时间是这么长：
        </div>
          <div className="pic">
            <img src={pic6} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1330, y: -850, scale: 0.1, rotateY: 180 }}>
          <div className="text">
            如果父母照顾到我们上大学，我们与他们相处的时间是这样的：
        </div>
          <div className="pic">
            <img src={pic7} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1330, y: -850, scale: 0.1, rotateY: 180 }}>
          <div className="text">
            如果我们的父母今年50岁，若天天见面，还能陪伴的时间是这么长：
        </div>
          <div className="pic">
            <img src={pic8} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1330, y: -850, scale: 0.1, rotateY: 180 }}>
          <div className="text">
            若是一个月只见一次，陪伴的时间是这么长：
        </div>
          <div className="pic">
            <img src={pic9} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1330, y: -850, scale: 0.1, rotateY: 180 }}>
          <div className="text">
            若我们在外地打工亦或是出国工作，一年甚至是两三年才回家一次，那么我们陪伴父母的时间可能只有短短一个月
        </div>
          <div className="pic">
            <img src={pic10} alt="" />
          </div>
        </Step>
        <Step className="slide" data={{ x: 1350, y: -400, rotateX: 90, rotateY: 90 }}>
          <ul style={{ lineHeight: "74px" }}>
            <li>
              很多事很多人一旦错过就不在
            </li>
            <li>
              以为岁月漫漫，总会有来日方长
            </li>
            <li>
              以为明天很多，很多事不必急于一时
            </li>
            <li>
              以为余生很长，很多人无需立刻相见
            </li>
            <li>
              可我们一生被量化时，竟是如此短暂
            </li>
          </ul>
        </Step>
        <Step className="end" data={{ x: 1350, scale: 10 }}>
          EDN
        </Step>
      </Impress>
    </div >
  )
}
