// Import React core
import React from 'react'
// Import component App chính của ứng dụng
import App from './App.jsx'
// Import ReactDOM để render ứng dụng vào DOM
import ReactDOM from 'react-dom/client'

// Tạo root và render ứng dụng
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode giúp phát hiện các vấn đề tiềm ẩn trong ứng dụng
  <React.StrictMode>
    {/* Render component App chính */}
    <App />
  </React.StrictMode>,
)