import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginForm from './components/LoginForm.jsx'
import SignUp from './components/SignUp.jsx'
import store from './store/store.js'
import {Provider} from 'react-redux'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
// import Chatpage from './components/chatpage.jsx'
import Home from './components/home.jsx'
import Chatpage from './components/chatpage.jsx'
import Friendlist from './components/friendlist.jsx'
import Search from './components/search.jsx'
import Requests from './components/requests.jsx'
import Profile from './components/profile.jsx'
import Form from './components/form.jsx'
import GroupList from './components/group/GroupList.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'login',
        element:<LoginForm/>
      },
      {
        path:'signup',
        element:<SignUp/>
      },
      {
        path:'home',
        element:<Home/>,
        children:[
          {
            path:'friends',
            element:<Friendlist/>,
            children:[{
              path:"chatpage/:friendid/:friendname",
              element:<Chatpage/>
                      }
                      ]
          },
          {
            path:"search",
            element:<Search/>,
          },
          {
            path:'requests',
            element:<Requests/>
          },
          {
            path:'profile',
            element:<Profile/>
          },
          {
            path:'update',
            element:<Form/>
          },
          {
            path:'groups',
            element:<GroupList/>,
            children:[
              {
                path:'groupchat/:groupid/:groupname'
              }
            ]
          }
        ]
      }
    ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
 
)
