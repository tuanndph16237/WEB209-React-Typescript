import React from 'react'
import { Outlet } from 'react-router-dom'
import Dassboard from '../../components/Dassboard/Dassboard'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
      <Dassboard />
      <Outlet />
    </div>
  )
}

export default AdminLayout