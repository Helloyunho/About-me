import type { Component } from 'solid-js'
import { createSignal, onMount, onCleanup } from 'solid-js'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import NavBar from './components/navbar/NavBar'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const isInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect()
  return rect.y <= window.innerHeight / 2 && rect.x <= window.innerWidth / 2
}
/* eslint-enable @typescript-eslint/strict-boolean-expressions */

const App: Component = () => {
  const [activeIndex, setActiveIndex] = createSignal<0 | 1 | 2 | 3>(0)

  const handleScroll = (): void => {
    /* eslint-disable @typescript-eslint/no-non-null-assertion -- these elements are obviously exist */
    const page2 = document.getElementById('page2')!
    const page3 = document.getElementById('page3')!
    const page4 = document.getElementById('page4')!
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    if (isInViewport(page4)) {
      setActiveIndex(3)
    } else if (isInViewport(page3)) {
      setActiveIndex(2)
    } else if (isInViewport(page2)) {
      setActiveIndex(1)
    } else {
      setActiveIndex(0)
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <NavBar activeIndex={activeIndex} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </>
  )
}

export default App
