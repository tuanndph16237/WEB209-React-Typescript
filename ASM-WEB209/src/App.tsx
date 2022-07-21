
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ProductAdminPage from './pages/Admin/Product/Product'
import CategoriesPage from './pages/Admin/category'
import AdminLayout from './components/Layout/Admin'
import UserLayout from './components/Layout/User'
import HomePage from './pages/Home/home'
import AddProductPage from './pages/Admin/Product/Add'
import DetailPage from './pages/Home/Detail/detail'
import EditProduct from './pages/Admin/Product/Edit'
import SigninPage from './pages/Auth/Signin'

function App(props: any) {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Routes>
        {/* Auth */}
        <Route path='/signin' element={<SigninPage/>}/>
        {/* User layout */}
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='detail' element={<DetailPage/>}/>
        </Route>
        {/* Admin layout */}
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<ProductAdminPage/>}/>
          <Route path='product/add' element={<AddProductPage/>}/>
          <Route path='product/edit' element={<EditProduct/>}/>
          <Route path='categories' element={<CategoriesPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App