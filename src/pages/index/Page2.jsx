import React from 'react'
import TransitionableText from '../../components/TransitionableText'
import Swift from '../../images/languages/swift.svg'
import JS from '../../images/languages/js.svg'
import Python from '../../images/languages/python.svg'
import TS from '../../images/languages/ts.svg'
import { useTranslation } from 'react-i18next'

const Page2 = () => {
  const { t } = useTranslation('page2')

  return (
    <div className='section'>
      <div className='w-screen h-screen grid xl:grid-cols-3 grid-rows-2'>
        <div className='xl:col-span-1 xl:row-span-2 row-span-1'>
          <div className='h-full flex items-center justify-center'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 lang-icons'>
              <div className='grid-flow-col grid-flow-row'>
                <img src={Swift} alt='Swift' className='w-full' />
                <TransitionableText
                  light
                  size='base'
                  resize={false}
                  className='text-center'>
                  Swift (?)
                </TransitionableText>
              </div>
              <div className='grid-flow-col grid-flow-row'>
                <img src={JS} alt='JS' className='w-full' />
                <TransitionableText
                  light
                  size='base'
                  resize={false}
                  className='text-center'>
                  JavaScript
                </TransitionableText>
              </div>
              <div className='grid-flow-col grid-flow-row'>
                <img src={Python} alt='Python' className='w-full' />
                <TransitionableText
                  light
                  size='base'
                  resize={false}
                  className='text-center'>
                  Python
                </TransitionableText>
              </div>
              <div className='grid-flow-col grid-flow-row'>
                <img src={TS} alt='TypeScript' className='w-full' />
                <TransitionableText
                  light
                  size='base'
                  resize={false}
                  className='text-center'>
                  TypeScript
                </TransitionableText>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-2 row-span-1'>
          <div className='h-full grid lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <div className='m-auto lg:flex lg:flex-col'>
              <div className='lg:flex lg:flex-row'>
                <TransitionableText light bold>
                  {t('langPrefix')}
                </TransitionableText>
                <TransitionableText light bold background>
                  Swift, JS, Python, TS
                </TransitionableText>
              </div>
              <TransitionableText light bold>
                {t('langSuffix')}
              </TransitionableText>
              <TransitionableText light size='base' resize={false}>
                {t('thanksComment')}
              </TransitionableText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
