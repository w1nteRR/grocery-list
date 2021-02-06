import { Switch, Route } from 'react-router-dom'

import { Details } from '../pages/Details'
import { Home } from '../pages/Home'

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/item/:id' component={Details} />
    </Switch>
  )
}