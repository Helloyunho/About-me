import type { Component, Accessor } from 'solid-js'
import NavBarItem from './Item'

const NavBar: Component<{
  activeIndex: Accessor<0 | 1 | 2 | 3>
  isDrawerOpen: Accessor<boolean>
  setIsDrawerOpen: (value: boolean) => void
}> = ({ activeIndex, isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <nav class='w-full fixed top-0 letf-0 z-41'>
      <div class='px-10 py-5 md:hidden block'>
        <button
          class='bg-base-light dark:bg-base-dark border-none p-0 cursor-pointer'
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen())
          }}
          aria-label='Open navigation drawer'
        >
          {/* from https://tabler-icons.io/ */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon icon-tabler icon-tabler-menu w-1em h-1em stroke-white mix-blend-difference stroke-2 text-size-3xl stroke-join-round stroke-cap-round'
            width='24'
            height='26'
            viewBox='0 -1 24 26'
            fill='none'
          >
            <path
              class={`transition-transform ${
                isDrawerOpen() ? '-rotate-45 -translate-y-1.65px' : ''
              }`}
              style={{
                'transform-origin': '12px 8px'
              }}
              d='M4 8l16 0'
            />
            <path
              class={`transition-transform ${
                isDrawerOpen() ? 'rotate-45 translate-y-1.65px' : ''
              }`}
              style={{
                'transform-origin': '12px 16px'
              }}
              d='M4 16l16 0'
            />
          </svg>
        </button>
      </div>
      <div class='px-10 py-5 justify-between md:flex hidden'>
        <NavBarItem href='#home' isActive={() => activeIndex() === 0} index={0}>
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
        <NavBarItem href='#more' isActive={() => activeIndex() === 3} index={3}>
          More
        </NavBarItem>
      </div>
    </nav>
  )
}

export default NavBar
