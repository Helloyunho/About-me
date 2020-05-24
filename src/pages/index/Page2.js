import React from 'react'
import TransitionableText from '../../components/TransitionableText'
import { darkPages } from '../../config'
import PropTypes from 'prop-types'

const Page2 = ({ currentPage }) => {
  return (
    <div data-anchor='Page 2' className='w-screen h-screen'>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <TransitionableText
              dark={darkPages.includes(currentPage)}
              light={!darkPages.includes(currentPage)}
              size='5xl'
              bold
            >
              저는&nbsp;
            </TransitionableText>
            <TransitionableText
              dark={darkPages.includes(currentPage)}
              light={!darkPages.includes(currentPage)}
              bold
              size='5xl'
              background
            >
              프로그래밍
            </TransitionableText>
          </div>
          <TransitionableText
            dark={darkPages.includes(currentPage)}
            light={!darkPages.includes(currentPage)}
            size='5xl'
            bold
          >
            하는 것을 좋아합니다.
          </TransitionableText>
          <TransitionableText
            dark={darkPages.includes(currentPage)}
            light={!darkPages.includes(currentPage)}
            size='xs'
            resize={false}
          >
            아 그리고, HTML은 프로그래밍 언어가 아닙니다.
          </TransitionableText>
        </div>
      </div>
    </div>
  )
}

Page2.propTypes = {
  currentPage: PropTypes.number.isRequired
}

export default Page2
