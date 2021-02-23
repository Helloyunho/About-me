import React from 'react'
import TransitionableText from '../../components/TransitionableText'
import { useTranslation } from 'react-i18next'
import GitHubRepoCard from '../../components/GitHubRepoCard'
import { repositories } from '../../config'
import { useMedia } from 'react-media'

const Page3 = () => {
  const { t } = useTranslation('page3')
  const isWide = useMedia({
    queries: { wide: '(min-width: 1280px)', ultraWide: '(min-width: 1366px)' }
  })

  return (
    <div className='section'>
      <div className='w-screen h-screen grid xl:grid-cols-2 grid-rows-2'>
        <div className='xl:col-span-1 xl:row-span-2 row-span-1'>
          <div className='h-full flex items-center justify-center'>
            <div className='px-8 grid xl:grid-cols-2 grid-cols-1 grid-rows-2 gap-8'>
              {repositories
                .map(({ owner, repo }, index) => (
                  <div className='grid-flow-col grid-flow-row' key={index}>
                    <GitHubRepoCard owner={owner} repo={repo} />
                  </div>
                ))
                .slice(0, isWide.wide ? undefined : 2)}
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2 row-span-1'>
          <div className='h-full grid lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <div className='m-auto lg:flex lg:flex-col'>
              <TransitionableText light bold>
                {t('reposPrefix')}
              </TransitionableText>
              <div className='lg:flex lg:flex-row'>
                <TransitionableText light bold background>
                  {[
                    ...repositories.reduce((prev, curr) => {
                      if (
                        [...prev, curr.repo, t('etc')].join(', ').length <
                        (isWide.ultraWide ? 24 : 16)
                      ) {
                        return [...prev, curr.repo]
                      } else {
                        return prev
                      }
                    }, []),
                    t('etc')
                  ].join(', ')}
                </TransitionableText>
                <TransitionableText light bold>
                  {isWide.wide
                    ? t('reposSuffix').replace(/ /g, '\u00a0')
                    : t('reposSuffix')}
                </TransitionableText>
              </div>
              <TransitionableText light size='base' resize={false}>
                {t('awesome')}
              </TransitionableText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3
