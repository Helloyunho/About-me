/* eslint-disable multiline-ternary */
import type { Component } from 'solid-js'
import { createResource } from 'solid-js'
import Page from '../components/Page'
import type { PinnedRepoPayload } from '../types/pinnedRepo'

const Page3: Component<{
  activeIndex: 0 | 1 | 2 | 3
  onClick: (index: 0 | 1 | 2 | 3) => void
}> = ({ activeIndex, onClick }) => {
  const [pinnedProjects] = createResource<PinnedRepoPayload[]>(async () => {
    const resp = await fetch(
      'https://gh-pinned-repos.egoist.dev/?username=Helloyunho'
    )
    return await resp.json()
  })

  return (
    <Page activeIndex={activeIndex} onClick={onClick}>
      <div class='p-16 flex justify-center gap-12 items-center flex-col'>
        {pinnedProjects.loading ? (
          <div class='flex justify-between items-center w-full'>
            <div class='flex flex-col'>
              <p class='text-size-4xl line-height-normal font-bold m-0 color-white mix-blend-difference'>
                Wait a bit...
              </p>
            </div>
          </div>
        ) : pinnedProjects.error !== undefined ? (
          <div class='flex justify-between items-center w-full'>
            <div class='flex flex-col'>
              <p class='text-size-4xl line-height-normal font-bold m-0 color-white mix-blend-difference'>
                Oops, an error occured while fetching my pinned projects
              </p>
              <p class='text-size-4xl line-height-normal font-bold m-0'>
                &nbsp;😅
              </p>
            </div>
          </div>
        ) : (
          pinnedProjects()?.map((project) => (
            <button
              class='border-none bg-base cursor-pointer p-0 flex justify-between items-center w-full'
              onClick={() => {
                window.location.href = project.link
              }}
            >
              <div class='flex flex-col items-start'>
                <p class='text-size-4xl line-height-normal font-bold m-0 color-white mix-blend-difference'>
                  {project.owner !== 'Helloyunho'
                    ? `${project.owner}/${project.repo}`
                    : project.repo}
                </p>
                <p class='text-size-2xl line-height-normal font-normal m-0 color-neutral-500 mix-blend-difference items-start'>
                  {project.description}
                </p>
              </div>
              <div class='i-tabler-arrow-narrow-right text-2xl' />
            </button>
          ))
        )}
      </div>
    </Page>
  )
}

export default Page3
