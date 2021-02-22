import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Page1 from './Page1'
import Page2 from './Page2'

const Index = () => {
  const [page, setPage] = React.useState(0)

  return (
    <ReactFullpage
      onLeave={(origin, destination, direction) => {
        switch (direction) {
          case 'down': {
            setPage(origin.index + 1)
            break
          }
          case 'up': {
            setPage(origin.index - 1)
            break
          }
          default:
        }
      }}
      keyboardScrolling={false}
      controlArrows={false}
      licenseKey='Dj1-sgayyesheisgaythiskeyisvalid'
      render={({ state, fullpageApi }) => (
        <>
          <div
            className={`min-w-screen min-h-screen bg-cover bg-local bg-center page${
              page + 1
            }-background`}>
            <Page1
              currentPage={page}
              pauseFullpage={() => {
                fullpageApi.setAllowScrolling(false)
              }}
              resumeFullpage={() => {
                fullpageApi.setAllowScrolling(true)
              }}
            />
            <Page2 currentPage={page} />
          </div>
        </>
      )}
    />
  )
}

export default Index
