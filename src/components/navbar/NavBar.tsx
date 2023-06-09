import type { Component } from 'solid-js'
import NavBarItem from './Item'

const NavBar: Component<{
  activeIndex: 0 | 1 | 2 | 3
  onClick: (index: 0 | 1 | 2 | 3) => void
}> = ({ activeIndex, onClick }) => {
  return (
    <nav class='w-full fixed top-0'>
      <div class='px-10 py-5 flex justify-between'>
        <NavBarItem
          isActive={activeIndex === 0}
          onClick={() => {
            onClick(0)
          }}
        >
          #0 Home
        </NavBarItem>
        <NavBarItem
          isActive={activeIndex === 1}
          onClick={() => {
            onClick(1)
          }}
        >
          #1 Profile
        </NavBarItem>
        <NavBarItem
          isActive={activeIndex === 2}
          onClick={() => {
            onClick(2)
          }}
        >
          #2 Projects
        </NavBarItem>
        <NavBarItem
          isActive={activeIndex === 3}
          onClick={() => {
            onClick(3)
          }}
        >
          #3 More
        </NavBarItem>
      </div>
    </nav>
  )
}

export default NavBar
