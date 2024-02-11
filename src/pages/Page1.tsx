/* eslint-disable multiline-ternary */
import type { Component } from 'solid-js'
import Page from '../components/Page'
import type { Flatten, Translator } from '@solid-primitives/i18n'
import type en from '../i18n/en'

const Page1: Component<{
  t: Translator<Flatten<typeof en>>
}> = ({ t }) => {
  return (
    <Page>
      <div
        class='flex justify-center items-start flex-grow flex-col px-4 sm:px-0 sm:items-center'
        id='home'
      >
        <div>
          <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
            {t('page1.hey')}&nbsp;
          </p>
          <div class='inline-block'>
            <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
              {t('page1.im')}&nbsp;
            </p>
            <a href='#profile'>
              <p
                class='md:text-size-6xl tag-p font-bold underline-good color-invert text-size-5xl'
                style={{
                  'text-underline-offset': '0.2em'
                }}
              >
                {t('page1.yunho')}
              </p>
            </a>
            <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
              {t('page1.yunhoPostfix')}
            </p>
          </div>
        </div>
        <div>
          {t('page1.a') != null ? (
            <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
              {t('page1.a')}&nbsp;
            </p>
          ) : null}
          <a href='#projects'>
            <p
              class='md:text-size-6xl tag-p font-bold gradient-underline-frontend text-size-5xl'
              style={{
                'background-image':
                  'linear-gradient(91.79deg, #7698F0 8.66%, #37D0BE 51.52%)',
                '-webkit-text-fill-color': 'transparent'
              }}
            >
              {t('page1.frontend')}
            </p>
            <p class='md:text-size-6xl tag-p font-bold gradient-underline-white before:mix-blend-difference text-size-5xl inline-block'>
              &nbsp;
            </p>
            <p
              class='md:text-size-6xl tag-p font-bold gradient-underline-white before:mix-blend-difference color-invert text-size-5xl'
              style={{
                'text-underline-offset': '0.2em'
              }}
            >
              {t('page1.developer')}
            </p>
          </a>
          <p class='md:text-size-6xl tag-p font-medium color-invert text-size-5xl'>
            {t('page1.developerPostfix')}
          </p>
        </div>
      </div>
    </Page>
  )
}

export default Page1
