import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
// import Page1 from './pages/Page1'
// import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

const App: Component = () => {
  const [activeIndex, setActiveIndex] = createSignal<0 | 1 | 2 | 3>(0)

  return (
    <>
      <Page3
        activeIndex={activeIndex()}
        onClick={(index) => {
          setActiveIndex(index)
        }}
      />
    </>
  )
}

export default App
