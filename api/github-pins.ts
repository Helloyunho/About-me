import { load as loadDOM } from 'cheerio'

interface PinnedRepoPayload {
  owner: string
  repo: string
  link: string
  description: string
}

export const config = {
  runtime: 'edge'
}

const handler = async (_: Request): Promise<Response> => {
  const resp = await fetch('https://github.com/Helloyunho')
  const html = await resp.text()
  const $ = loadDOM(html)

  const pinnedProjects: PinnedRepoPayload[] = []

  for (const project of $('.pinned-item-list-item-content')) {
    const link = $(project).find('a')?.attr('href')
    if (link !== undefined && link !== null) {
      const owner = link.split('/')[1]
      const repo = link.split('/')[2]
      const description = $(project).find('p:first')?.text()?.trim()
      pinnedProjects.push({
        link: `https://github.com${link}`,
        owner,
        repo,
        description: description ?? ''
      })
    }
  }
  return new Response(JSON.stringify(pinnedProjects), {
    status: 200,
    headers: {
      'content-type': 'application/json'
    }
  })
}

export default handler
