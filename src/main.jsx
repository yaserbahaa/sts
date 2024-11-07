import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Loading from './comp/loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Suspense fallback={<Loading/>}> */}
    <App />
    {/* </Suspense> */}
    </BrowserRouter>
  </React.StrictMode>,
)
