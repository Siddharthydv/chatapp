import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Input from './components/Input.jsx'
import LoginForm from './components/LoginForm.jsx'
import SignUp from './components/SignUp.jsx'
import store from './store/store.js'
import {Provider} from 'react-redux'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { login } from './store/authstatus.js'
// import Chatpage from './components/chatpage.jsx'
import Sidebar from './components/sidebar.jsx'
import Menubar from './components/menubar.jsx'
import Home from './components/home.jsx'
import Chatpage from './components/chatpage.jsx'
import Friendlist from './components/friendlist.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/login',
        element:<LoginForm/>
      }
    ]
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/home',
    element:<Home/>,
    children:[
      {
        path:'friends',
        element:<Friendlist/>,
        children:[{
          path:"chatpage/:friendid",
          element:<Chatpage/>
                  }
                  ]
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <Input></Input>
  // <Chatpage></Chatpage>
  // <div className='flex h-screen w-full  border-2 border-red-400 rounded-md'> 
  //    <Sidebar></Sidebar>
  //    <Menubar></Menubar>
      // </div>

      // <Home></Home>
   <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
)
