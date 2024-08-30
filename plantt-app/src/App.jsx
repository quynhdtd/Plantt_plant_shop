import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { useState } from 'react'

import './App.css'

import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  // {
  //   path: '/shop',
  //   element: <Shop/>
  // }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
