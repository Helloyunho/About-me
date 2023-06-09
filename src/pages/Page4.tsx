import type { Component } from 'solid-js'
import Page from '../components/Page'

const Page4: Component<{
  activeIndex: 0 | 1 | 2 | 3
  onClick: (index: 0 | 1 | 2 | 3) => void
}> = ({ activeIndex, onClick }) => {
  return (
    <Page activeIndex={activeIndex} onClick={onClick}>
      <div class='flex justify-around items-start flex-grow flex-col py-8 pl-12.5% h-full'>
        <div class='flex flex-col'> {/* dummy element */}</div>
        <div class='flex flex-col gap-2'>
          <p class='text-size-6xl line-height-normal font-bold m-0 color-white mix-blend-difference'>
            Contact
          </p>
          <div class='flex'>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference underline underline-4'>
                Email
              </p>
            </button>
            <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-#191717 underline underline-4'>
                GitHub
              </p>
            </button>
            <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,
            </p>
          </div>
          <div class='flex'>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-#5865F2 underline underline-4'>
                Discord
              </p>
            </button>
            <p class='text-size-5xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p class='text-size-5xl line-height-normal font-semibold m-0 color-#4C9BF0 underline underline-4'>
                Twitter
              </p>
            </button>
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
