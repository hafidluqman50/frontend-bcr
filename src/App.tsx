import { ReactElement, useEffect } from 'react'
import NotFoundPage from './pages/Exceptions/NotFound'

import IndexPage from './pages/Guest/Index'
import CarFilterPage from './pages/Guest/CarFilter'
import RentCarPage from './pages/Guest/RentCar'

import LoginSuperAdminPage from './pages/SuperAdmin/Login'
import DashboardSuperAdminPage from './pages/SuperAdmin/Dashboard'
import CarsSuperAdminPage from './pages/SuperAdmin/Cars/Main'
import CarsCreateSuperAdminPage from './pages/SuperAdmin/Cars/Create'
import CarsEditSuperAdminPage from './pages/SuperAdmin/Cars/Edit'
import LogCarsSuperAdminPage from './pages/SuperAdmin/LogCars/Main'
import UserAdminsSuperAdminPage from './pages/SuperAdmin/UserAdmins/Main'
import UserAdminsCreateSuperAdminPage from './pages/SuperAdmin/UserAdmins/Create'
import UserAdminsEditSuperAdminPage from './pages/SuperAdmin/UserAdmins/Edit'

import LoginAdminPage from './pages/Admin/Login'
import DashboardAdminPage from './pages/Admin/Dashboard'
import CarsAdminPage from './pages/Admin/Cars/Main'
import CarsCreateAdminPage from './pages/Admin/Cars/Create'
import CarsEditAdminPage from './pages/Admin/Cars/Edit'
import LogCarsAdminPage from './pages/Admin/LogCars/Main'

import LoginMemberPage from './pages/Member/Login'
import RegisterMemberPage from './pages/Member/Register'
import DashboardMemberPage from './pages/Member/Dashboard'
import CarsMemberPage from './pages/Member/Cars/Main'

import { Route, Routes, useLocation } from 'react-router-dom'
import nprogress from 'nprogress'
import Layout from './layout/Guest/Layout'

import $ from 'jquery'

(window as any).$ = $

function App(): ReactElement {
  
  const location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={IndexPage} />
        <Route path="cars" Component={CarFilterPage} />
        <Route path="cars/rent/:id" Component={RentCarPage} />
      </Route>
      <Route path="/superadmin">
        <Route path="login" Component={LoginSuperAdminPage} />
        <Route path="dashboard" Component={DashboardSuperAdminPage} />
        <Route path="cars">
          <Route index Component={CarsSuperAdminPage} />
          <Route path="create" Component={CarsCreateSuperAdminPage} />
          <Route path="edit/:id" Component={CarsEditSuperAdminPage} />
          <Route path="logs" Component={LogCarsSuperAdminPage} />
        </Route>
        <Route path="user-admins">
          <Route index Component={UserAdminsSuperAdminPage} />
          <Route path="create" Component={UserAdminsCreateSuperAdminPage} />
          <Route path="edit/:id" Component={UserAdminsEditSuperAdminPage} />
        </Route>
      </Route>
      <Route path="/admin">
        <Route path="login" Component={LoginAdminPage} />
        <Route path="dashboard" Component={DashboardAdminPage} />
        <Route path="cars">
          <Route index Component={CarsAdminPage} />
          <Route path="create" Component={CarsCreateAdminPage} />
          <Route path="edit/:id" Component={CarsEditAdminPage} />
          <Route path="logs" Component={LogCarsAdminPage} />
        </Route>
      </Route>
      <Route path="/member">
        <Route path="login" Component={LoginMemberPage} />
        <Route path="register" Component={RegisterMemberPage} />
        <Route path="dashboard" Component={DashboardMemberPage} />
        <Route path="cars" Component={CarsMemberPage} />
      </Route>
      <Route path="*" Component={NotFoundPage} />
    </Routes>
  )
}

export default App
