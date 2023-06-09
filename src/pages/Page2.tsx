import type { Component } from 'solid-js'
import Page from '../components/Page'

const Page2: Component<{
  activeIndex: 0 | 1 | 2 | 3
  onClick: (index: 0 | 1 | 2 | 3) => void
}> = ({ activeIndex, onClick }) => {
  return (
    <Page activeIndex={activeIndex} onClick={onClick}>
      <div class='flex justify-around items-start flex-grow flex-col py-8 pl-12.5% h-full'>
        <div class='flex flex-col'>
          <div class='flex'>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              I'm&nbsp;
            </p>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              Yunho
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              , a&nbsp;
            </p>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p
                class='text-size-4xl line-height-normal font-semibold m-0 underline underline-4 color-white mix-blend-difference'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                Frontend developer
              </p>
            </button>
            <p class='text-size-4xl line-height-normal font-medium m-0'>
              &nbsp;👩🏼‍💻
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
          <div class='flex'>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              I'm also known as&nbsp;
            </p>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              Helloyunho
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
          <div class='flex'>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              I'm&nbsp;
            </p>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              17
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              &nbsp;years old, and I'm from&nbsp;
            </p>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              Korea
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0'>
              &nbsp;🇰🇷
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
          <div class='flex'>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              My preferred pronouns is&nbsp;
            </p>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              She/Her
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0'>
              &nbsp;🙋‍♀️
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
          <div class='flex'>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              Feel free to&nbsp;
            </p>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p
                class='text-size-4xl line-height-normal font-semibold m-0 underline underline-4 color-white mix-blend-difference'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                contact me
              </p>
            </button>
            <p class='text-size-4xl line-height-normal font-medium m-0'>
              &nbsp;💌
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
        </div>
        <div class='flex flex-col'>
          <p class='text-size-5xl line-height-normal font-bold m-0 color-white mix-blend-difference'>
            Languages I Use
          </p>
          <div class='flex'>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p class='text-size-4xl line-height-normal font-semibold m-0 color-#4D7CC1 underline underline-4'>
                TypeScript
              </p>
            </button>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p class='text-size-4xl line-height-normal font-semibold m-0 color-#E5DE30 underline underline-4'>
                JavaScript
              </p>
            </button>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,
            </p>
          </div>
          <div class='flex'>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p
                class='text-size-4xl line-height-normal font-semibold m-0 relative bg-clip-text before:absolute before:top-87% before:left-0 before:h-1 before:bg-python before:w-full before:content-empty'
                style={{
                  'background-image':
                    'linear-gradient(96.28deg, #508DD6 0%, #7AABC5 27.96%, #C5D89D 61.32%, #D2CD44 94.18%)',
                  '-webkit-text-fill-color': 'transparent'
                }}
              >
                Python
              </p>
            </button>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <button class='flex border-none bg-base cursor-pointer p-0'>
              <p
                class='text-size-4xl line-height-normal font-semibold m-0 relative bg-clip-text before:absolute before:top-87% before:left-0 before:h-1 before:bg-swift before:w-full before:content-empty'
                style={{
                  'background-image':
                    'linear-gradient(101.42deg, #E68E27 0%, #D29F1A 93.03%)',
                  '-webkit-text-fill-color': 'transparent'
                }}
              >
                Swift
              </p>
            </button>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Page2
