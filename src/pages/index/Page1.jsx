import React from 'react'
import image from '../../images/avatar.png'
import TransitionableText from '../../components/TransitionableText'
import { darkPages } from '../../config'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'

const Page1 = ({ currentPage, destroyPageable }) => {
  return (
    <div data-anchor='Page 1' className='w-screen h-screen grid grid-cols-3'>
      <div className='lg:col-span-2 col-span-3'>
        <div className='h-full flex flex-col justify-center items-center'>
          <div className='lg:flex lg:flex-col'>
            <TransitionableText
              dark={darkPages.includes(currentPage)}
              light={!darkPages.includes(currentPage)}
              bold
              size='6xl'
              resize={false}
            >
              안녕하세요,
            </TransitionableText>
            <div className='lg:flex lg:flex-row'>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                bold
                size='6xl'
                resize={false}
                background
              >
                Helloyunho
              </TransitionableText>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                bold
                size='6xl'
                resize={false}
                className='lg:block hidden'
              >
                &nbsp;입니다.
              </TransitionableText>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                bold
                size='6xl'
                resize={false}
                className='lg:hidden block'
              >
                입니다.
              </TransitionableText>
            </div>
            <div className='flex flex-row'>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                size='base'
                resize={false}
                className='lg:block hidden'
              >
                제 정보에 대하여 더 궁금하다고요? 제 프로필을 눌러보세요!
              </TransitionableText>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                size='base'
                resize={false}
                className='lg:hidden block'
              >
                제 정보에 대하여 더 궁금하다고요?&nbsp;
              </TransitionableText>
              <button
                onClick={() => {
                  destroyPageable()
                  navigate('/myinfo')
                }}
                aria-label='여기'
              >
                <TransitionableText
                  dark={darkPages.includes(currentPage)}
                  light={!darkPages.includes(currentPage)}
                  size='base'
                  resize={false}
                  className='lg:hidden block'
                >
                  여기
                </TransitionableText>
              </button>
              <TransitionableText
                dark={darkPages.includes(currentPage)}
                light={!darkPages.includes(currentPage)}
                size='base'
                resize={false}
                className='lg:hidden block'
              >
                를 눌러보세요!
              </TransitionableText>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:col-span-1 lg:block hidden'>
        <div className='h-full flex justify-center items-center'>
          <button
            onClick={() => {
              destroyPageable()
              navigate('/myinfo')
            }}
            aria-label='프로필 상세정보 보기'
          >
            <img src={image} alt='' />
          </button>
        </div>
      </div>
    </div>
  )
}

Page1.propTypes = {
  currentPage: PropTypes.number.isRequired,
  destroyPageable: PropTypes.func
}

export default Page1
