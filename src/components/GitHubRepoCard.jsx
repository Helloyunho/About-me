import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

// Colors: https://raw.githubusercontent.com/ozh/github-colors/master/colors.json

const GitHubRepoInfo = ({ data }) => {
  return (
    <>
      <div className='flex-initial'>
        <FontAwesomeIcon icon={faBook} className='text-gray-800' size='lg' />
        <a
          href={data.url}
          className='text-blue-600 hover:underline'
          style={{
            overflowWrap: 'break-word'
          }}>
          <span className='pl-2'>{data.owner}/</span>
          <span className='font-semibold'>{data.name}</span>
        </a>
      </div>
      <span className='pt-1.5 h-full pb-2 text-gray-800 flex-auto'>
        {data.description}
      </span>
      <div className='flex-initial'>
        <div
          className='h-2 w-2 rounded-full inline-block'
          style={{
            backgroundColor: data.langColor ?? '#000000'
          }}
        />
        <span className='pl-1 pr-2 text-gray-800'>{data.lang}</span>
        <a href={`${data.url}/stargazers`}>
          <FontAwesomeIcon icon={faStar} className='text-gray-800' size='sm' />
          <span className='pl-1 pr-2 text-gray-800'>{data.stars}</span>
        </a>
        <a href={`${data.url}/network/members`}>
          <FontAwesomeIcon
            icon={faCodeBranch}
            className='text-gray-800'
            size='sm'
          />
          <span className='pl-1 pr-2 text-gray-800'>{data.forks}</span>
        </a>
      </div>
    </>
  )
}

GitHubRepoInfo.propTypes = {
  data: PropTypes.object.isRequired
}

const GitHubRepoCard = ({ owner, repo }) => {
  const [repoInfo, setRepoInfo] = React.useState({})
  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
      .then((resp) => {
        if (!resp.ok) {
          setRepoInfo({
            success: false
          })
          console.error(`GitHub API Error ${resp.status}: ${resp.statusText}`)
          return
        }

        resp
          .json()
          .then((data) => {
            const result = {
              success: true,
              data: {
                name: data.name,
                owner: data.owner.login,
                description: data.description,
                url: data.html_url,
                forks: data.forks,
                stars: data.stargazers_count,
                lang: data.language
              }
            }

            fetch(
              'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
            )
              .then((resp) => {
                resp.json().then((colorData) => {
                  if (colorData[data.language] !== undefined) {
                    result.data.langColor = colorData[data.language].color
                  }
                  setRepoInfo(result)
                })
              })
              .catch((err) => {
                setRepoInfo({
                  success: false
                })
                console.error(err)
              })
          })
          .catch((err) => {
            setRepoInfo({
              success: false
            })
            console.error(err)
          })
      })
      .catch((err) => {
        setRepoInfo({
          success: false
        })
        console.error(err)
      })
  }, [])

  return (
    <>
      <div
        className='w-full h-full rounded-md'
        style={{
          backgroundColor: '#adb5bd'
        }}>
        <div className='w-full h-full px-4 py-5 flex flex-col'>
          {/* eslint-disable-next-line */}
          {repoInfo.success === undefined ? (
            <span>Wait a moment...</span> /* eslint-disable-next-line */
          ) : !repoInfo.success ? (
            <span>Fetching repository failed!</span>
          ) : (
            <GitHubRepoInfo data={repoInfo.data} />
          )}
        </div>
      </div>
    </>
  )
}

GitHubRepoCard.propTypes = {
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired
}

export default GitHubRepoCard
