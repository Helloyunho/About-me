import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import NavBar from './components/navbar/NavBar'

const App: Component = () => {
  const [activeIndex, setActiveIndex] = createSignal<0 | 1 | 2 | 3>(0)

  return (
    <div
      style={{
        'scroll-snap-type': 'y mandatory'
      }}
    >
      <NavBar activeIndex={activeIndex()} onClick={setActiveIndex} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  )
}

export default App
