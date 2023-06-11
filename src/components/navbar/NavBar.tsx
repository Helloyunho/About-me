import type { Component, Accessor } from 'solid-js'
import NavBarItem from './Item'

const NavBar: Component<{
  activeIndex: Accessor<0 | 1 | 2 | 3>
}> = ({ activeIndex }) => {
  return (
    <nav class='w-full fixed top-0'>
      <div class='px-10 py-5 flex justify-between'>
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
    </nav>
  )
}

export default NavBar
