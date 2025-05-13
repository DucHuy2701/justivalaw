import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import App from './App.jsx'
import './index.css'

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Thời gian hiệu ứng (ms)
      once: true, // Chỉ chạy một lần khi cuộn
    })
  }, [])

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)