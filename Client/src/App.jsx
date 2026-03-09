import './App.css'
import Hero from './Component/Hero.JSX'
import Tag from './Component/tag'
import B2B from './Component/B2B'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [darkMood, setdarkMood] = useState(false)
  const Allrouter = createBrowserRouter([

    {
      path: '/',
      element: <Hero darkMood={darkMood} setdarkMood={setdarkMood} />
    },
    {
      path: '/generate-tags',
      element: <Tag darkMood={darkMood} setdarkMood={setdarkMood} />
    },
    {
      path: '/b2b-proposal-generator',
      element: <B2B darkMood={darkMood} setdarkMood={setdarkMood} />
    }
  ]
  )

  return (
    <>
      <RouterProvider router={Allrouter} />
    </>
  )
}

export default App
