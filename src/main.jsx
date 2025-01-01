import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-11/12 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
