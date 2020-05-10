import React, { useState } from 'react'
import Choose from '../../component/choose'
import Table from '../../component/table'

export default () => {
  
  const [date, setDate] = useState(1)

  return (
    <div>
      <Choose setDate={setDate}/>
      <Table date={date}/>
    </div>
  )
}