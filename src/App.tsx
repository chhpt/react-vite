import { Button } from 'antd'
import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from '@emotion/styled'
import logo from '@/assets/logo.svg'
import '@/App.less'
import About from './About'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #282c34;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContainer className="text-center flex flex-col align-middle justify-center">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p className="py-5">
          <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            target="_blank"
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/about">About</Link>
        </p>
      </Header>
      <Switch>
        <Route exact path="/">
          <div className="text-center text-white text-2xl mt-10">Home</div>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App
