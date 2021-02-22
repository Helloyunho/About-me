import React from 'react'
import image from '../../images/avatar.png'
import TransitionableText from '../../components/TransitionableText'
import PropTypes from 'prop-types'
import MyInfo from '../../components/myinfo'
import { useTranslation } from 'react-i18next'
import { useMedia } from 'react-media'

const Page1 = ({ pauseFullpage, resumeFullpage }) => {
  const [overlay, setOverlayBool] = React.useState(false)
  const { t } = useTranslation('page1')
  const isWide = useMedia({
    query: '(min-width: 1024px)'
  })

  return (
    <React.Fragment>
      {/* eslint-disable-next-line */}
      {overlay ? (
        <div
          className='w-screen h-screen fixed block top-0 left-0 bg-white dark:bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center'
          onClick={() => {
            setOverlayBool(false)
            resumeFullpage()
          }}>
          <MyInfo />
        </div>
      ) : null}
      <div className='section'>
        <div className='w-screen h-screen flex flex-col-reverse lg:grid lg:grid-cols-3'>
          <div className='lg:col-span-2 lg:row-span-3'>
            <div className='h-full flex flex-col justify-center items-center lg:px-0 lg:py-0'>
              <div className='flex-col'>
                <TransitionableText light bold size='6xl' resize={false}>
                  {t('greeting')}
                </TransitionableText>
                <div className='flex flex-row flex-wrap'>
                  <TransitionableText light bold size='6xl' resize={false}>
                    {isWide
                      ? t('nickPrefix').replace(/ /g, '\u00a0')
                      : t('nickPrefix')}
                  </TransitionableText>
                  <TransitionableText
                    light
                    bold
                    size='6xl'
                    resize={false}
                    background>
                    Helloyunho
                  </TransitionableText>
                  <TransitionableText light bold size='6xl' resize={false}>
                    {isWide
                      ? t('nickSuffix').replace(/ /g, '\u00a0')
                      : t('nickSuffix')}
                  </TransitionableText>
                </div>
                <div className='flex-row'>
                  <TransitionableText light size='base' resize={false}>
                    {t('profileInfo')}
                  </TransitionableText>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-1 lg:row-span-3 row-start-1'>
            <div className='h-full flex justify-center items-center'>
              <button
                onClick={() => {
                  pauseFullpage()
                  setOverlayBool(true)
                }}
                aria-label={t('profileButtonInfo')}
                className='px-10 py-10'>
                <img
                  src={image}
                  alt=''
                  className='object-scale-down rounded-full my-profile'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Page1.propTypes = {
  pauseFullpage: PropTypes.func,
  resumeFullpage: PropTypes.func
}

export default Page1
