import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

// Wrap the whole application with the Language Provider wrapper component from your LanguageContext.jsx file
const Root = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Root />)
