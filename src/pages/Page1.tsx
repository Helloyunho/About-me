import type { Component } from 'solid-js'
import Page from '../components/Page'

const Page1: Component = () => {
  return (
    <Page>
      <div
        class='flex justify-center items-start flex-grow flex-col px-4 sm:px-0 sm:items-center'
        id='page1'
      >
        <div>
          <p class='md:text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference text-size-5xl inline-block'>
            Hey!&nbsp;
          </p>
          <div class='inline-block'>
            <p class='md:text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference text-size-5xl inline-block'>
              I'm&nbsp;
            </p>
            <a href='#page2'>
              <p
                class='md:text-size-6xl line-height-normal font-bold m-0 underline underline-4 color-white mix-blend-difference text-size-5xl inline-block'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                Yunho
              </p>
            </a>
            <p class='md:text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference text-size-5xl inline-block'>
              .{' '}
            </p>
          </div>
        </div>
        <div>
          <p class='md:text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference text-size-5xl inline-block'>
            A&nbsp;
          </p>
          <a href='#page3'>
            <p
              class='md:text-size-6xl line-height-normal font-bold m-0 relative bg-clip-text before:absolute before:top-87% before:left-0 before:h-1 before:bg-frontend before:w-full before:content-empty text-size-5xl inline-block'
              style={{
                'background-image':
                  'linear-gradient(91.79deg, #7698F0 8.66%, #37D0BE 51.52%)',
                '-webkit-text-fill-color': 'transparent'
              }}
            >
              frontend
            </p>
            <p class='md:text-size-6xl line-height-normal font-bold m-0 relative before:absolute before:top-87% before:left-0 before:h-1 before:bg-base before:mix-blend-difference before:w-full before:content-empty text-size-5xl hidden sm:inline-block'>
              &nbsp;
            </p>
            <p
              class='md:text-size-6xl line-height-normal font-bold m-0 underline underline-4 color-white mix-blend-difference text-size-5xl inline-block'
              style={{
                'text-underline-offset': '0.2em'
              }}
            >
              developer
            </p>
          </a>
          <p class='md:text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference text-size-5xl inline-block'>
            .{' '}
          </p>
        </div>
      </div>
    </Page>
  )
}

export default Page1
