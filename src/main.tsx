import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root')

if(rootElement){

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

}else{

  throw new Error("Root element not found")

}
