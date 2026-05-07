import NiceModal from '@ebay/nice-modal-react'
import {createBrowserRouter, Outlet} from 'react-router-dom'
import AuthLayout from '@/layouts/auth'
import LoginPage from '@/pages/auth/login'
import DashboardLayout from '@dash-lay/index'
import ProtectedRoutes from '@/router/ProtectedRoutes'
import MeProvider from '@/modules/auth/contexts/MeProvider'
import AuthProvider from '@/modules/auth/contexts/AuthProvider'
import HomePage from "@/pages/home";
import ModelPage from "@/pages/models/model/ModelPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <AuthProvider>
          <MeProvider>
            <NiceModal.Provider>
              <DashboardLayout>
                <ProtectedRoutes/>
              </DashboardLayout>
            </NiceModal.Provider>
          </MeProvider>
        </AuthProvider>
    ),
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/models/:modelId',
        element: <ModelPage/>,
      },
    ],
  },
  {
    path: '/auth',
    element: (
        <AuthProvider>
          <AuthLayout>
            <Outlet/>
          </AuthLayout>
        </AuthProvider>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage/>,
      }
    ],
  }
])

export default router
