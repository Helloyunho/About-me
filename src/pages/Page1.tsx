import type { Component } from 'solid-js'
import Page from '../components/Page'

const Page1: Component = () => {
  return (
    <Page>
      <div
        class='flex justify-center items-start flex-grow flex-col px-4 sm:px-0 sm:items-center'
        id='home'
      >
        <div>
          <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
            Hey!&nbsp;
          </p>
          <div class='inline-block'>
            <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
              I'm&nbsp;
            </p>
            <a href='#profile'>
              <p
                class='md:text-size-6xl tag-p font-bold underline-good color-invert text-size-5xl'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                Yunho
              </p>
            </a>
            <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
              .{' '}
            </p>
          </div>
        </div>
        <div>
          <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
            A&nbsp;
          </p>
          <a href='#projects'>
            <p
              class='md:text-size-6xl tag-p font-bold gradient-underline-frontend text-size-5xl'
              style={{
                'background-image':
                  'linear-gradient(91.79deg, #7698F0 8.66%, #37D0BE 51.52%)',
                '-webkit-text-fill-color': 'transparent'
              }}
            >
              frontend
            </p>
            <p class='md:text-size-6xl tag-p font-bold gradient-underline-white before:mix-blend-difference text-size-5xl hidden sm:inline-block'>
              &nbsp;
            </p>
            <p
              class='md:text-size-6xl tag-p font-bold underline-good color-invert text-size-5xl'
              style={{
                'text-underline-offset': '0.2em'
              }}
            >
              developer
            </p>
          </a>
          <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
            .{' '}
          </p>
        </div>
      </div>
    </Page>
  )
}

export default Page1
