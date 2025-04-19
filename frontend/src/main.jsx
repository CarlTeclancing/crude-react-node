import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Students from './pages/Students.jsx';
import './App.css';
import Add from './pages/Add.jsx';
import Edit from './pages/Edit.jsx';
import DeleteEntry from './pages/Delete.jsx';

const router = createBrowserRouter([
  {path: '/', element:<Students />},
  {path: '/add', element:<Add />},
  {path: '/edit', element:<Edit />},
  {path: '/delete', element:<DeleteEntry />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
