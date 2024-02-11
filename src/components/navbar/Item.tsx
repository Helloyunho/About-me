/* eslint-disable multiline-ternary */
import type { Component } from 'solid-js'

const NavBarItem: Component<{
  href?: string
  isActive: () => boolean
  index?: number
  onClick?: () => void
  children: () => unknown
}> = ({ children, href, isActive, index, onClick }) => {
  return (
    <a
      class='flex bg-base-light dark:bg-base-dark cursor-pointer'
      href={href}
      onClick={onClick}
    >
      {index != null ? (
        <p
          class={`${
            isActive() ? 'color-white' : 'color-neutral-500'
          } text-size-3xl ${
            isActive() ? 'font-semibold' : 'font-light'
          } mix-blend-difference my-0`}
        >
          #{index}&nbsp;
        </p>
      ) : null}
      <p
        class={`${
          isActive() ? 'color-white' : 'color-neutral-500'
        } text-size-3xl ${
          isActive() ? 'font-semibold' : 'font-light'
        } mix-blend-difference my-0`}
      >
        {children() as string}
      </p>
    </a>
  )
}

export default NavBarItem
