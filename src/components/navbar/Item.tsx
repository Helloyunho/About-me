import type { ParentComponent } from 'solid-js'

const NavBarItem: ParentComponent<{
  isActive: boolean
  onClick?: () => void
}> = ({ children, isActive, onClick }) => {
  return (
    <button class='border-none bg-base cursor-pointer' onClick={onClick}>
      <p
        class={`${
          isActive ? 'color-white' : 'color-neutral-500'
        } text-size-3xl ${
          isActive ? 'font-semibold' : 'font-light'
        } mix-blend-difference my-0`}
      >
        {children}
      </p>
    </button>
  )
}

export default NavBarItem
