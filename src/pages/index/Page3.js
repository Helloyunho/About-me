import React from 'react'
import TransitionableText from '../../components/TransitionableText'
import Swift from '../../images/languages/swift.svg'
import JS from '../../images/languages/js.svg'
import Python from '../../images/languages/python.svg'
import Rust from '../../images/languages/rust.svg'
import { darkPages } from '../../config'
import PropTypes from 'prop-types'

const Page3 = ({ currentPage }) => {
  return (
    <div
      data-anchor='Page 3'
      className='w-screen h-screen grid xl:grid-cols-3 grid-rows-2'
    >
      <div className='xl:col-span-1 xl:row-span-2 row-span-1'>
        <div className='h-full flex items-center justify-center'>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 lang-icons'>
            <div className='grid-flow-col grid-flow-row'>
              <img src={Swift} alt='Swift' className='w-full' />
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                size='base'
                resize={false}
                className='text-center'
              >
                Swift (?)
              </TransitionableText>
            </div>
            <div className='grid-flow-col grid-flow-row'>
              <img src={JS} alt='JS' className='w-full' />
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                size='base'
                resize={false}
                className='text-center'
              >
                JavaScript
              </TransitionableText>
            </div>
            <div className='grid-flow-col grid-flow-row'>
              <img src={Python} alt='Python' className='w-full' />
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                size='base'
                resize={false}
                className='text-center'
              >
                Python
              </TransitionableText>
            </div>
            <div className='grid-flow-col grid-flow-row'>
              <img src={Rust} alt='Rust' className='w-full' />
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                size='base'
                resize={false}
                className='text-center'
              >
                Rust
              </TransitionableText>
            </div>
          </div>
        </div>
      </div>
      <div className='xl:col-span-2 xl:row-span-2 row-span-1'>
        <div className='h-full grid lg:flex lg:flex-col lg:justify-center lg:items-center'>
          <div className='m-auto lg:flex lg:flex-col'>
            <div className='lg:flex lg:flex-row'>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                bold
              >
                저는&nbsp;
              </TransitionableText>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                bold
                background
              >
                Swift, JS, Python, Rust
              </TransitionableText>
            </div>
            <TransitionableText
              dark={darkPages.includes(currentPage)}
              light={!darkPages.includes(currentPage)}
              bold
            >
              언어들을 사용합니다.
            </TransitionableText>
            <TransitionableText
              dark={darkPages.includes(currentPage)}
              light={!darkPages.includes(currentPage)}
              size='base'
              resize={false}
            >
              이 아이콘들을 제공해주신 ppapman님 감사합니다.
            </TransitionableText>
          </div>
        </div>
      </div>
    </div>
  )
}

Page3.propTypes = {
  currentPage: PropTypes.number.isRequired
}

export default Page3
