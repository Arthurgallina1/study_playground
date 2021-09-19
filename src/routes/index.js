import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'
import { useSpring, animated, useTransition } from 'react-spring'

import DynamicForm from '../components/DynamicForm'
import Home from '../pages/Home'
import Perfo from '../pages/Perfo'
import Portal from '../pages/Portal'
import SWR from '../pages/SWR'
import UseModal from '../pages/UseModal'

const animation = {
  from: {
    opacity: 0,
    position: 'absolute',
    transform: 'translateX(75%)'
  },
  enter: {
    opacity: 1,
    position: 'absolute',
    transform: 'translateX(0)'
  },
  leave: {
    opacity: 0,
    position: 'absolute',
    transform: 'translateY(75%)'
  },
  delay: 111
}

export default function App() {
  const location = useLocation()
  const transitions = useTransition(location, animation)

  return transitions((props, item) => (
    <animated.div style={{...props, width: '100%'}}>
      <Switch location={location}>
        <Route path="/about">
          <Perfo />
        </Route>
        <Route path="/users">
          <Home />
        </Route>
        <Route path="/dynamicform">
          <DynamicForm />
        </Route>
        <Route path="/swr">
          <SWR />
        </Route>
        <Route path="/portal">
          <Portal />
        </Route>
        <Route path="/usemodal">
          <UseModal />
        </Route>
      </Switch>
    </animated.div>
   )
  );
}
