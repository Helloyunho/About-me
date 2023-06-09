import type { Component } from 'solid-js'
import Page from '../components/Page'

const Page4: Component = () => {
  return (
    <Page>
      <div
        class='flex justify-around items-start flex-grow flex-col py-8 pl-12.5% h-full'
        id='page4'
      >
        <div class='flex flex-col'> {/* dummy element */}</div>
        <div class='flex flex-col gap-2'>
          <p class='text-size-6xl line-height-normal font-bold m-0 color-white mix-blend-difference'>
            Contact
          </p>
          <div class='flex'>
            <a href='mailto:me@helloyunho.xyz'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference underline underline-4'>
                Email
              </p>
            </a>
            <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <a href='https://github.com/Helloyunho'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-#191717 underline underline-4'>
                GitHub
              </p>
            </a>
            <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,
            </p>
          </div>
          <div class='flex'>
            <a href='https://discord.com/users/119550317003014144'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-#5865F2 underline underline-4'>
                Discord
              </p>
            </a>
            <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <a href='https://twitter.com/helloyunho_'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-#4C9BF0 underline underline-4'>
                Twitter
              </p>
            </a>
            <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Page4
