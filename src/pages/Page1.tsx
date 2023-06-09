import type { Component } from 'solid-js'
import Page from '../components/Page'

const Page1: Component = () => {
  return (
    <Page>
      <div
        class='flex justify-center items-center flex-grow flex-col'
        id='page1'
      >
        <div class='flex'>
          <p class='text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
            Hey! I'm&nbsp;
          </p>
          <a href='#page2'>
            <p
              class='text-size-6xl line-height-normal font-bold m-0 underline underline-4 color-white mix-blend-difference'
              style={{
                'text-underline-offset': '0.2em'
              }}
            >
              Yunho
            </p>
          </a>
          <p class='text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
            .{' '}
          </p>
        </div>
        <div class='flex'>
          <p class='text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
            A&nbsp;
          </p>
          <a class='flex' href='#page3'>
            <p
              class='text-size-6xl line-height-normal font-bold m-0 relative bg-clip-text before:absolute before:top-87% before:left-0 before:h-1 before:bg-frontend before:w-full before:content-empty'
              style={{
                'background-image':
                  'linear-gradient(91.79deg, #7698F0 8.66%, #37D0BE 51.52%)',
                '-webkit-text-fill-color': 'transparent'
              }}
            >
              frontend
            </p>
            <p
              class='text-size-6xl line-height-normal font-bold m-0 underline underline-4 color-white mix-blend-difference'
              style={{
                'text-underline-offset': '0.2em'
              }}
            >
              &nbsp;developer
            </p>
          </a>
          <p class='text-size-6xl line-height-normal font-medium m-0 color-white mix-blend-difference'>
            .{' '}
          </p>
        </div>
      </div>
    </Page>
  )
}

export default Page1
