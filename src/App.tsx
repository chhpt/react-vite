import { Button } from '@/components/ui/button'
import { Link, Route, Routes } from 'react-router'
import styled from '@emotion/styled'
import logo from '@/assets/logo.svg'
import About from './About'
import TaskForm from './TaskForm'
import { useCountStore } from './store'

import '@/App.scss'

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
  const count = useCountStore((state) => state.count)
  const increment = useCountStore((state) => state.increment)

  return (
    <AppContainer className="flex flex-col justify-center text-center align-middle">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p className="py-5">
          <Button onClick={increment}>count is: {count}</Button>
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
      <Routes>
        <Route
          path="/"
          element={<div className="mt-10 text-2xl text-center text-white">Home</div>}
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <TaskForm />
            </>
          }
        />
      </Routes>
    </AppContainer>
  )
}

export default App
