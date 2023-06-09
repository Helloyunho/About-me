import type { Component } from 'solid-js'
import Page from '../components/Page'

const myBirthday = new Date(2005, 8, 10) // celebrate me!!

const Page2: Component = () => {
  return (
    <Page>
      <div
        class='flex justify-around items-start flex-grow flex-col py-8 pl-12.5% h-full'
        id='page2'
      >
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
            <a href='#page3'>
              <p
                class='text-size-4xl line-height-normal font-semibold m-0 underline underline-4 color-white mix-blend-difference'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                Frontend developer
              </p>
            </a>
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
              {new Date(Date.now() - myBirthday.getTime()).getFullYear() - 1970}
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
            <a href='#page4'>
              <p
                class='text-size-4xl line-height-normal font-semibold m-0 underline underline-4 color-white mix-blend-difference'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                contact me
              </p>
            </a>
            <p class='text-size-4xl line-height-normal font-medium m-0'>
              &nbsp;💌
            </p>
            <p class='text-size-4xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
              .
            </p>
          </div>
        </div>
        <div class='flex flex-col gap-2'>
          <p class='text-size-5xl line-height-normal font-bold m-0 color-white mix-blend-difference'>
            Languages I Use
          </p>
          <div class='flex'>
            <a href='https://www.typescriptlang.org/'>
              <p class='text-size-4xl line-height-normal font-semibold m-0 color-#4D7CC1 underline underline-4'>
                TypeScript
              </p>
            </a>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
              <p class='text-size-4xl line-height-normal font-semibold m-0 color-#E5DE30 underline underline-4'>
                JavaScript
              </p>
            </a>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,
            </p>
          </div>
          <div class='flex'>
            <a href='https://www.python.org/'>
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
            </a>
            <p class='text-size-4xl line-height-normal font-semibold m-0 color-white mix-blend-difference'>
              ,&nbsp;
            </p>
            <a href='https://www.swift.org/'>
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
            </a>
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
