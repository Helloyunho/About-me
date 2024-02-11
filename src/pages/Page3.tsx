/* eslint-disable multiline-ternary */
import type { Component } from 'solid-js'
import { createResource } from 'solid-js'
import Page from '../components/Page'
import type { PinnedRepoPayload } from '../types/pinnedRepo'
import type { Translator, Flatten } from '@solid-primitives/i18n'
import type en from '../i18n/en'

const Page3: Component<{
  t: Translator<Flatten<typeof en>>
}> = ({ t }) => {
  const [pinnedProjects] = createResource<PinnedRepoPayload[]>(async () => {
    const resp = await fetch('/api/github-pins')
    return await resp.json()
  })

  return (
    <Page>
      <div
        class='px-4 py-24 flex justify-center gap-12 items-center flex-col sm:px-16'
        id='projects'
      >
        {pinnedProjects.loading ? (
          <div class='flex justify-between items-center w-full'>
            <div class='flex flex-col'>
              <p class='text-size-4xl tag-p font-bold color-invert'>
                {t('page3.wait')}
              </p>
            </div>
          </div>
        ) : pinnedProjects.error !== undefined ? (
          <div class='flex justify-between items-center w-full'>
            <div class='flex flex-col'>
              <p class='text-size-4xl tag-p font-bold color-invert'>
                {t('page3.error')}
              </p>
              <p class='text-size-4xl tag-p font-bold'>&nbsp;😅</p>
            </div>
          </div>
        ) : (
          pinnedProjects()?.map((project) => (
            <a
              class='flex justify-between items-start w-full flex-col sm:flex-row'
              href={project.link}
            >
              <div class='flex flex-col items-start'>
                <p class='text-size-3xl tag-p font-bold color-invert sm:text-size-4xl'>
                  {project.owner !== 'Helloyunho'
                    ? `${project.owner}/${project.repo}`
                    : project.repo}
                </p>
                <p class='text-size-xl tag-p font-normal color-neutral-500 mix-blend-difference items-start sm:text-size-2xl'>
                  {project.description}
                </p>
              </div>
              <div class='i-tabler-arrow-narrow-right text-2xl color-invert basis-2xl' />
            </a>
          ))
        )}
      </div>
    </Page>
  )
}

export default Page3
