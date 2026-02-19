import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import PasswordGenerator from './components/PasswordGenerator.tsx'
import Card from './components/Card.tsx'
import Github, { githubInfoLoader } from './components/github.tsx'
import Landingpage from './components/Landingpage.tsx'

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path:'PasswordGen',
        element:<PasswordGenerator/>
      },{path:'Card',
        element:<Card/>
      },
      {
        path:'user/:userid',
        element:<Card/>
      }
    ]
  }
]) */


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path="" element={<Landingpage/>}/>
        <Route path='PasswordGen' element={<PasswordGenerator/>}/>
        <Route path='Card' element={<Card/>}/>
        <Route path='user/:userid' element={<Card/>}/>
        <Route path='github' loader={githubInfoLoader} element={<Github/>}/>
      </Route>
    )
  )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
