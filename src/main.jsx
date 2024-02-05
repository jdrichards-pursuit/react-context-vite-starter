import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

// Wrap the whole application with the LanguageContext Provider
const Root = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Root />)
