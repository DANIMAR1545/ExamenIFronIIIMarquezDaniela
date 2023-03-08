import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Escribe tu hobbie preferido</h1>
      <Form />
    </div>
  )
}

export default App
