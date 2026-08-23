import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/index.jsx'
import { Provider } from 'react-redux'
import { Store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
   <Provider store={Store}>
    <App/>
   </Provider>
    </BrowserRouter>
  </AuthProvider>
)
