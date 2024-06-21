import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import './index.scss'


const root = document.getElementById('root')
const vRoot = ReactDOM.createRoot(root)

vRoot.render(
  <App/>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
