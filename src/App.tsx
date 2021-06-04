import React from 'react'
import { Button } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'
import styled from '@emotion/styled'
import logo from '@/assets/logo.svg'
import { useState } from '@hookstate/core'
import About from './About'
import TaskForm from './TaskForm'

import '@/App.less'

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
  const count = useState(0)

  return (
    <AppContainer className="text-center flex flex-col align-middle justify-center">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p className="py-5">
          <Button onClick={() => count.set((p) => p + 1)}>count is: {count.get()}</Button>
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
          <TaskForm />
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App
