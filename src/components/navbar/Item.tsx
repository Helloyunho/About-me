import type { ParentComponent } from 'solid-js'
import { createEffect } from 'solid-js'

const NavBarItem: ParentComponent<{
  href?: string
  isActive: () => boolean
}> = ({ children, href, isActive }) => {
  return (
    <a class='bg-base' href={href}>
      <p
        class={`${
          isActive() ? 'color-white' : 'color-neutral-500'
        } text-size-3xl ${
          isActive() ? 'font-semibold' : 'font-light'
        } mix-blend-difference my-0`}
      >
        {children}
      </p>
    </a>
  )
}

export default NavBarItem
