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
    const page2 = document.getElementById('profile')!
    const page3 = document.getElementById('projects')!
    const page4 = document.getElementById('more')!
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
    if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', '#0A0D12')
    }
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        if (event.matches) {
          document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', '#0A0D12')
        } else {
          document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', '#F5F2ED')
        }
      })
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
      {isDrawerOpen() && (
        <div
          class='bg-gray-900 bg-opacity-10 fixed inset-0 z-30'
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      <div
        class={`fixed top-0 left-0 z-40 overflow-y-auto transition-transform transition-duration-500 ease-out w-48 h-screen pt-18 pb-12 px-10 bg-base-light dark:bg-base-dark ${
          isDrawerOpen() ? 'translate-none' : '-translate-x-full'
        }`}
      >
        <div class='flex flex-col gap-2'>
          <NavBarItem
            href='#home'
            isActive={() => activeIndex() === 0}
            index={0}
          >
            Home
          </NavBarItem>
          <NavBarItem
            href='#profile'
            isActive={() => activeIndex() === 1}
            index={1}
          >
            Profile
          </NavBarItem>
          <NavBarItem
            href='#projects'
            isActive={() => activeIndex() === 2}
            index={2}
          >
            Projects
          </NavBarItem>
          <NavBarItem
            href='#more'
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
