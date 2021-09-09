import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { useSpring, animated, useTransition } from 'react-spring'

import DynamicForm from '../components/DynamicForm'
import Home from "../pages/Home";

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
    delay: 111,
}

export default function App() {

    const location = useLocation()
    const transitions = useTransition(location, animation)


  return transitions((props, item) => (
   <animated.div style={{...props, width: '100%'}}>
      <Switch location={item}>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Home />
        </Route>
        <Route path="/dynamicform">
          <DynamicForm />
        </Route>
      </Switch>
   </animated.div>
   )
  );
}

// function Home() {
//   return <div style={{ background: 'blue', padding: '10px', height: '90vh'}}>Home</div>;
// }

function About() {
  return <div style={{ background: 'yellow', padding: '10px', height: '90vh'}}>About</div>;
}
