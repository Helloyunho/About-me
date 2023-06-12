import type { ParentComponent } from 'solid-js'

const NavBarItem: ParentComponent<{
  href?: string
  isActive: () => boolean
  index: number
}> = ({ children, href, isActive, index }) => {
  return (
    <a class='bg-base flex' href={href}>
      <p
        class={`${
          isActive() ? 'color-white' : 'color-neutral-500'
        } text-size-3xl ${
          isActive() ? 'font-semibold' : 'font-light'
        } mix-blend-difference my-0`}
      >
        #{index}&nbsp;
      </p>
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
