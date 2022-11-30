import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Routes/About";
import Home,{fetch} from "./Routes/Home";
import Root from "./Routes/Root";
import "./App.css";
import NewPost, { submitPost } from "./Routes/Newpost";
import Post, { postloader } from "./Routes/Post";
export default function App()
{
  const router = createBrowserRouter([{
    path: '/',
    element:<Root/>,
    children :[
      {
        path:"/",
        element:<Home/>,
        loader: fetch
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/post/:id",
        element:<Post/>,
        loader: postloader
      },
      {
        path:'/new',
        element: <NewPost/>,
        action :submitPost,
       
      }
    ]
  }])
  return( 
     <RouterProvider router={router}/>
     )

}