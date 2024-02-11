import type { Component } from 'solid-js'
import Page from '../components/Page'
import type { Translator, Flatten } from '@solid-primitives/i18n'
import type en from '../i18n/en'

const Page4: Component<{
  t: Translator<Flatten<typeof en>>
}> = ({ t }) => {
  return (
    <Page>
      <div
        class='flex justify-around items-start flex-grow flex-col py-8 pl-12.5% h-full'
        id='more'
      >
        <div class='flex flex-col'> {/* dummy element */}</div>
        <div class='flex flex-col gap-2'>
          <p class='text-size-5xl tag-p font-bold color-invert md:text-size-6xl'>
            {t('page4.contact')}
          </p>
          <div class='flex'>
            <a href='mailto:me@helloyunho.xyz'>
              <p class='text-size-4xl tag-p font-semibold color-invert underline-good md:text-size-5xl'>
                Email
              </p>
            </a>
            <p class='text-size-4xl tag-p font-semibold color-invert md:text-size-5xl'>
              ,&nbsp;
            </p>
            <a href='https://github.com/Helloyunho'>
              <p class='text-size-4xl tag-p font-semibold color-#191717 dark:color-white underline-good md:text-size-5xl'>
                GitHub
              </p>
            </a>
            <p class='text-size-4xl tag-p font-semibold color-invert md:text-size-5xl'>
              ,
            </p>
          </div>
          <div class='flex'>
            <a href='https://discord.com/users/119550317003014144'>
              <p class='text-size-4xl tag-p font-semibold color-#5865F2 underline-good md:text-size-5xl'>
                Discord
              </p>
            </a>
            <p class='text-size-4xl tag-p font-semibold color-invert md:text-size-5xl'>
              ,&nbsp;
            </p>
            <a href='https://twitter.com/helloyunho_'>
              <p class='text-size-4xl tag-p font-semibold color-invert underline-good md:text-size-5xl'>
                X
              </p>
            </a>
            <p class='text-size-4xl tag-p font-semibold color-invert md:text-size-5xl'>
              .
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Page4
