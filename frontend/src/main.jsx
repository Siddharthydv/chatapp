import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Input from './components/Input.jsx'
import LoginForm from './components/LoginForm.jsx'
import SignUp from './components/SignUp.jsx'
import store from './store/store.js'
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <Input></Input>
  
   <Provider store={store}>
    <LoginForm></LoginForm>
   </Provider>
)
