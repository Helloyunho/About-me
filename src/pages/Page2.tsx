import type { Component } from 'solid-js'
import Page from '../components/Page'

const myBirthday = new Date(2005, 8, 10) // celebrate me!!

const Page2: Component = () => {
  return (
    <Page>
      <div
        class='flex justify-around items-start flex-grow flex-col py-20 pl-4 md:pl-12.5% h-full'
        id='profile'
      >
        <div class='flex flex-col'>
          <div>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              I'm&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              Yunho
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              , a&nbsp;
            </p>
            <a href='#projects' class='inline-block text-size-3xl'>
              <p
                class='md:text-size-4xl tag-p font-semibold underline-good color-invert'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                Frontend developer
              </p>
            </a>
            <p class='md:text-size-4xl tag-p font-medium text-size-3xl'>
              &nbsp;👩🏼‍💻
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              .
            </p>
          </div>
          <div>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              I'm also known as&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              Helloyunho
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              .
            </p>
          </div>
          <div>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              I'm&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              {new Date(Date.now() - myBirthday.getTime()).getFullYear() - 1970}
              &nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              years old,&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              and&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              I'm from&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              Korea&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-medium text-size-3xl'>🇰🇷</p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              .
            </p>
          </div>
          <div>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              My preferred pronouns is&nbsp;
            </p>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              She/Her
            </p>
            <p class='md:text-size-4xl tag-p font-medium text-size-3xl'>
              &nbsp;🙋‍♀️
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              .
            </p>
          </div>
          <div>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              Feel free to&nbsp;
            </p>
            <a href='#more'>
              <p
                class='md:text-size-4xl tag-p font-semibold underline-good color-invert text-size-3xl'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                contact me
              </p>
            </a>
            <p class='md:text-size-4xl tag-p font-medium text-size-3xl'>
              &nbsp;💌
            </p>
            <p class='md:text-size-4xl tag-p font-medium color-invert text-size-3xl'>
              .
            </p>
          </div>
        </div>
        <div class='flex flex-col gap-2'>
          <p class='md:text-size-5xl tag-p font-bold color-invert text-size-10'>
            Languages I Use
          </p>
          <div class='flex'>
            <a href='https://www.typescriptlang.org/'>
              <p class='md:text-size-4xl tag-p font-semibold color-#4D7CC1 underline-good text-size-3xl'>
                TypeScript
              </p>
            </a>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              ,&nbsp;
            </p>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
              <p class='md:text-size-4xl tag-p font-semibold color-#E5DE30 underline-good text-size-3xl'>
                JavaScript
              </p>
            </a>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              ,
            </p>
          </div>
          <div class='flex'>
            <a href='https://www.python.org/'>
              <p
                class='md:text-size-4xl tag-p font-semibold gradient-underline-python text-size-3xl'
                style={{
                  'background-image':
                    'linear-gradient(96.28deg, #508DD6 0%, #7AABC5 27.96%, #C5D89D 61.32%, #D2CD44 94.18%)',
                  '-webkit-text-fill-color': 'transparent'
                }}
              >
                Python
              </p>
            </a>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              ,&nbsp;
            </p>
            <a href='https://www.swift.org/'>
              <p
                class='md:text-size-4xl tag-p font-semibold gradient-underline-swift text-size-3xl'
                style={{
                  'background-image':
                    'linear-gradient(101.42deg, #E68E27 0%, #D29F1A 93.03%)',
                  '-webkit-text-fill-color': 'transparent'
                }}
              >
                Swift
              </p>
            </a>
            <p class='md:text-size-4xl tag-p font-semibold color-invert text-size-3xl'>
              .
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Page2
