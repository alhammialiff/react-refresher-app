import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './../public/vite.svg'
import './App.scss'
import NavbarComponent from './component/navbar/navbar.component'
import MidSectionComponent from './component/mid/mid-section.component'
import { postApiTestSignal } from './service/api-service/api.service'

function App() {

  //==========================================================
  // Todo -:
  // (1) API Signal Test
  // (2) API to get dataset image
  // (3) Create ModelCreationContainerComponent
  // (4) Forms for training/test output
  // (5) 
  //==========================================================

  const [count, setCount] = useState(0)
  const [name, setName] = useState(null)
  const [welcomeMessage, showWelcomeMessage] = useState(false)
  const [apiSignalData, setApiSignalData] = useState(null)

  useEffect(() => {
    const fetchApiSignal = async () => {
      const response = await postApiTestSignal();
      setApiSignalData(response);
    };
    fetchApiSignal();
  }, []);

  return (

    <div className="container">
      
      <div className='row'>
        <div className='col'>
          <NavbarComponent /> 
        </div>
      </div>
      
      <div className='row'>
        <div className='col'>
          <MidSectionComponent /> 
        </div>
      </div>
      
    </div>
      
  )
}

export default App

      /* 
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
      </p> */