import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
