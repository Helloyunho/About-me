import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faDiscord,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import myProfile from '../../images/avatar.png'

const MyInfo = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div
          className='max-w-sm bg-gray-100 rounded-md'
          style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
        >
          <div className='w-full px-8 py-10 border-2 border-b-0 rounded-t-md flex justify-center items-center'>
            <img
              src={myProfile}
              alt=''
              className='rounded-full my-profile shadow-outline'
              style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}
            />
          </div>
          <div
            className='px-6 py-4 border-2 border-b-0 cursor-pointer'
            onClick={() =>
              (window.location.href = 'https://github.com/Helloyunho')
            }
          >
            <p className='text-base'>
              <FontAwesomeIcon icon={faGithub} />
              &nbsp; GitHub
            </p>
          </div>
          <div className='px-6 py-4 border-2 border-b-0'>
            <p className='text-base'>
              <FontAwesomeIcon icon={faDiscord} />
              &nbsp; Discord Helloyunho#2004
            </p>
          </div>
          <div
            className='px-6 py-4 border-2 border-b-0 cursor-pointer'
            onClick={() =>
              (window.location.href = 'https://twitter.com/yunho098765')
            }
          >
            <p className='text-base'>
              <FontAwesomeIcon icon={faTwitter} />
              &nbsp; Twitter
            </p>
          </div>
          <div
            className='px-6 py-4 border-2 rounded-b-md cursor-pointer'
            onClick={() =>
              (window.location.href =
                'https://www.youtube.com/user/yunho050840')
            }
          >
            <p className='text-base'>
              <FontAwesomeIcon icon={faYoutube} />
              &nbsp; YouTube
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyInfo
