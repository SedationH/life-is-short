import React, { useState } from 'react'
import Choose from '../../component/choose'
import Table from '../../component/table'
import './check.scss'

export default () => {

  const [date, setDate] = useState(0)

  return (
    <div className="check-wrap">
      <Choose setDate={setDate} />
      <Table date={date} />
    </div>
  )
}