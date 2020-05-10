import React, { Fragment } from 'react'
import './table.scss'

let age = []
age.length = 80 * 52
age.fill(1)

export default (props) => {
  let date = props.date
  return (
    <div className="table-wrap">
      <div className="table-des">
        你已经度过了{parseInt(date)-1}周
      </div>
      <div className="table">
        {
          age.map((e, i) => {
            let cur = i + 1

            if (cur <= date) {
              if (i % 52 === 0) {
                return (
                  <Fragment>
                    <span className="index">{(i / 52) + 1}</span>
                    <div className="box"></div>
                  </Fragment>
                )
              }
              return <div className="box light"></div>
            } else {
              if (i % 52 === 0) {
                return (
                  <Fragment>
                    <span className="index">{(i / 52) + 1}</span>
                    <div className="box dim"></div>
                  </Fragment>
                )
              }
              return <div className="box dim"></div>
            }
          })
        }
      </div>
    </div>
  )
} 