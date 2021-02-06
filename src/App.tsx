import { Container } from '@material-ui/core'
import { FC } from 'react'
import { Provider } from './context/app.context'

import { useRoutes } from './hooks/useRoutes'

export const App: FC = () => {
  
  const routes = useRoutes()
  
  return (
    <Provider>
      <Container maxWidth='sm'>{routes}</Container>
    </Provider>
  )
}
