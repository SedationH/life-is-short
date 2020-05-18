import React, { useState } from 'react'
import Choose from '../../component/choose'
import Table from '../../component/table'
import './check.scss'
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

export default () => {

  let history = useHistory()

  function handleBack() {
    history.push('/')
    window.location.reload()
  }

  const [date, setDate] = useState(0)

  return (
    <div className="check-wrap">
      <div className="back">
        <Button type="primary" block onClick={handleBack}>
          返回
        </Button>
      </div>
      <Choose setDate={setDate} />
      <Table date={date} />
    </div>
  )
}