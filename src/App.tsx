import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './routing/navigator'

function App() {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  )
}

export default App
