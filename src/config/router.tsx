import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/Main'

const configRouter = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
])

export default configRouter
