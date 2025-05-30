import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './../public/vite.svg'
import './App.css'
import NavbarComponent from './component/navbar/navbar.component'

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState(null)
  const [welcomeMessage, showWelcomeMessage] = useState(false)

  return (

    <>
      
      <NavbarComponent>
      </NavbarComponent>
      
      
      <h1>Vite + React</h1>
      

      <div className="form">
        
        <form onSubmit={(e) => {
          e.preventDefault();
          showWelcomeMessage((current)=> !current)
        }}>
          
          <label htmlFor="nameInput">
            Enter your name
          </label>
          
          <input id="nameInput" type="text" onChange={(e: any)=> setName(e.target.value)} />
          
          <button id="submitButton">
            Enter
          </button>
        
        </form>

      </div>

      <div className="text-section"
        id="nameSection">
        <p>{name}</p>
      </div>

      <div>
        {welcomeMessage && <p>Welcome, {name}!</p>}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>

  )
}

export default App
