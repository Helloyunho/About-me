import type { Component } from 'solid-js'
import { createSignal, onMount, onCleanup } from 'solid-js'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import NavBar from './components/navbar/NavBar'
import NavBarItem from './components/navbar/Item'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const isInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect()
  return rect.y <= window.innerHeight / 2 && rect.x <= window.innerWidth / 2
}
/* eslint-enable @typescript-eslint/strict-boolean-expressions */

const App: Component = () => {
  const [activeIndex, setActiveIndex] = createSignal<0 | 1 | 2 | 3>(0)
  const [isDrawerOpen, setIsDrawerOpen] = createSignal<boolean>(false)

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
      <NavBar
        activeIndex={activeIndex}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <div
        class={`fixed py-16 px-10 top-0 left-0 z-40 overflow-y-auto transition-transform ${
          isDrawerOpen() ? 'translate-none' : '-translate-x-full'
        } w-40 bg-base`}
      >
        <div class='flex flex-col gap-2'>
          <NavBarItem
            href='#page1'
            isActive={() => activeIndex() === 0}
            index={0}
          >
            Home
          </NavBarItem>
          <NavBarItem
            href='#page2'
            isActive={() => activeIndex() === 1}
            index={1}
          >
            Profile
          </NavBarItem>
          <NavBarItem
            href='#page3'
            isActive={() => activeIndex() === 2}
            index={2}
          >
            Projects
          </NavBarItem>
          <NavBarItem
            href='#page4'
            isActive={() => activeIndex() === 3}
            index={3}
          >
            More
          </NavBarItem>
        </div>
      </div>
    </>
  )
}

export default App
