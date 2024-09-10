import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CombineSignup from './components/CombineSignup';
import CompanySignUp from './components/CompanySignUp.jsx';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
path:"/", element:<App/>
  },
  {
    path:"/sign-up" , element:<CombineSignup/>
  },
  {
    path:"/sign-up-recruiter", element:<CompanySignUp/>
  },
  {
    path:"/sign-in", element:<SignIn/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
