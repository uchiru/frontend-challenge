import { DefaultLayout } from '#/components/layouts/DefaultLayout'
import router from '#/utils/router'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
     <DefaultLayout>
      <RouterProvider router={router} />
     </DefaultLayout>
  )
}

export default App
