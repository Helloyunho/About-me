import React from 'react'
import Pageable from 'pageable'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { disableBodyScroll } from 'body-scroll-lock'

const Index = () => {
  const [page, setPage] = React.useState(0)
  const [pages, setPages] = React.useState(null)

  React.useEffect(() => {
    const pages = new Pageable('#container', {
      animation: 500,
      autoInitialize: false
    })
    setPages(pages)
    /* iOS re-orientation fix */
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i)
    ) {
      window.scrollTo(0, 1)
    }
    disableBodyScroll(document.querySelector('#root'))
    pages.on('init', e => {
      setPage(e.index)
    })
    pages.on('scroll.start', e => {
      setPage(e.index)
    })
    pages.init()
  }, [])

  return (
    <>
      <div
        className={`min-w-screen min-h-screen bg-cover bg-local bg-center ${
          page === 1
            ? 'coding-background'
            : page === 2
            ? 'dark-background'
            : 'original-background'
        }`}
        id='container'
      >
        <Page1
          currentPage={page}
          destroyPageable={() => {
            if (pages) {
              pages.destroy()
            }
          }}
        />
        <Page2 currentPage={page} />
        <Page3 currentPage={page} />
      </div>
    </>
  )
}

export default Index