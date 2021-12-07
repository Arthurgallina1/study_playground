import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
import { useSpring, animated, useTransition } from 'react-spring'
import { QueryClient, QueryClientProvider } from 'react-query'
import DynamicForm from '../components/DynamicForm'
import ReactQuery from '../components/ReactQuery'
import Home from '../pages/Home'
import Perfo from '../pages/Perfo'
import Portal from '../pages/Portal'
import SWR from '../pages/SWR'
import UseModal from '../pages/UseModal'

const animation = {
  from: {
    opacity: 0,
    position: 'absolute',
    transform: 'translateX(75%)',
  },
  enter: {
    opacity: 1,
    position: 'absolute',
    transform: 'translateX(0)',
  },
  leave: {
    opacity: 0,
    position: 'absolute',
    transform: 'translateY(75%)',
  },
  delay: 111,
}

const queryClient = new QueryClient()

export default function App() {
  const location = useLocation()
  const transitions = useTransition(location, animation)

  return transitions((props, item) => (
    <animated.div style={{ ...props, width: '100%' }}>
      <QueryClientProvider client={queryClient}>
        <Switch location={location}>
          <Route path='/about'>
            <Perfo />
          </Route>
          <Route path='/users'>
            <Home />
          </Route>
          <Route path='/dynamicform'>
            <DynamicForm />
          </Route>
          <Route path='/swr'>
            <SWR />
          </Route>
          <Route path='/portal'>
            <Portal />
          </Route>
          <Route path='/usemodal'>
            <UseModal />
          </Route>
          <Route path='/reactquery'>
            <ReactQuery />
          </Route>
        </Switch>
      </QueryClientProvider>
    </animated.div>
  ))
}
