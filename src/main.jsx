import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataLayer } from './DataLayer.jsx'
import  reducer,{initialState} from './Reducer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
    <App />
    </DataLayer>
  </StrictMode>,
)
