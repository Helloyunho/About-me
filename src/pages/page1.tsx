import React from 'react'
import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  VStack,
  Text,
  HStack,
  Image,
  Card,
  Stack,
  CardBody,
  SimpleGrid,
  Progress,
  useColorMode,
  CardFooter,
  Skeleton,
  Button
} from '@chakra-ui/react'
import NavBar from '../components/navbar'
import myProfile from '../images/avatar.png'
import jsLogo from '../images/js.svg'
import tsLogo from '../images/ts-logo-512.svg'
import swiftLogo from '../images/Swift_logo_color.svg'
import pythonLogo from '../images/python-logo-only.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import useSWR from 'swr'
import { PinnedRepoPayload } from '../types/pinnedRepo'

const myBirthday = new Date(2005, 8, 10) // celebrate me!!
const languages: {
  name: string
  logo: string
  level: number
  colorScheme: string
  description: string
}[] = [
  {
    name: 'TypeScript',
    logo: tsLogo,
    level: 90,
    colorScheme: 'blue',
    description: 'I use TypeScript to make web apps and libraries.'
  },
  {
    name: 'JavaScript',
    logo: jsLogo,
    level: 80,
    colorScheme: 'yellow',
    description:
      'I also use JavaScript for small projects and quick prototyping.'
  },
  {
    name: 'Swift',
    logo: swiftLogo,
    level: 75,
    colorScheme: 'orange',
    description:
      "I use Swift to make some native apps and libraries, also it's my favorite language."
  },
  {
    name: 'Python',
    logo: pythonLogo,
    level: 90,
    colorScheme: 'blue',
    description: 'I use Python to do some quick, non important process.'
  }
]
const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const Page1 = () => {
  const { colorMode } = useColorMode()
  // TODO: handle error
  const { data: repos, error }: { data?: PinnedRepoPayload[]; error?: any } =
    useSWR('https://gh-pinned-repos.egoist.dev/?username=Helloyunho', fetcher)

  return (
    <>
      <NavBar />
      <Container maxW='container.lg'>
        <Center>
          <VStack spacing='2.5'>
            <Avatar
              name='Helloyunho'
              src={myProfile}
              bg='transparent'
              width='64'
              height='64'
            />
            <Heading fontSize='4xl'>Hello, I'm Yunho.</Heading>
            <Text fontSize='2xl'>(or Helloyunho)</Text>
            <HStack spacing='2'>
              <a
                href='https://discord.com/users/119550317003014144'
                style={{
                  backgroundColor: '#5865F2',
                  borderRadius: '4em',
                  padding: '0.25em',
                  aspectRatio: '1/1'
                }}>
                <Center>
                  <FontAwesomeIcon
                    icon={faDiscord}
                    size='xl'
                    color='#fff'
                    style={{ aspectRatio: '1/1' }}
                  />
                </Center>
              </a>
              <a href='https://github.com/Helloyunho'>
                <FontAwesomeIcon
                  icon={faGithub}
                  size='2x'
                  color={colorMode === 'light' ? '#333' : '#fafafa'}
                />
              </a>
              <a href='https://twitter.com/helloyunho_'>
                <FontAwesomeIcon icon={faTwitter} size='2x' color='#1DA1F2' />
              </a>
              <a href='https://youtube.com/c/helloyunho'>
                <FontAwesomeIcon icon={faYoutube} size='2x' color='red' />
              </a>
              <a href='mailto:me@helloyunho.xyz'>
                <FontAwesomeIcon icon={faEnvelope} size='2x' color='gray' />
              </a>
            </HStack>
          </VStack>
        </Center>
        <Divider p='2' />
        <Heading fontSize='2xl' py='2'>
          About me
        </Heading>
        <Box pl='4' py='1'>
          <Text>
            <li>
              Age:{' '}
              {new Date(Date.now() - myBirthday.getTime()).getFullYear() - 1970}
            </li>
          </Text>
          <Text>
            <li>Lives in: Korea 🇰🇷</li>
          </Text>
          <Text>
            <li>Still a student</li>
          </Text>
        </Box>
        <Heading fontSize='2xl' py='2'>
          What I use
        </Heading>
        <Box py='1'>
          <Heading fontSize='xl'>Programming language</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing='8' my='4'>
            {languages.map((language) => (
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                key={language.name}>
                <Image
                  objectFit='cover'
                  src={language.logo}
                  alt={language.name}
                  w={{ base: 'unset', sm: '30%' }}></Image>

                <CardBody>
                  <Heading fontSize='xl'>{language.name}</Heading>

                  <Text py='2'>{language.description}</Text>
                  <Progress
                    value={language.level}
                    colorScheme={language.colorScheme}
                  />
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
          <Text color='GrayText'>
            The Swift logo is a trademark of Apple Inc.
          </Text>
          <Text color='GrayText'>
            And yes I know that Swift logo is rounded rectangle and Python logo
            is kinda off
          </Text>
        </Box>
        <Heading fontSize='2xl' py='2'>
          What I developed
        </Heading>
        <Skeleton isLoaded={repos !== undefined}>
          <Stack spacing='8' my='4'>
            {repos?.map((repo) => (
              <a href={repo.link} key={repo.link}>
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  _hover={{
                    bgColor: colorMode === 'dark' ? 'gray.600' : 'gray.100',
                    transition: 'background-color 0.1s ease-in-out'
                  }}
                  transition='background-color 0.1s ease-in-out'>
                  <Image
                    objectFit='contain'
                    w={{ base: 'unset', sm: '30%' }}
                    src={repo.image}
                    alt={repo.repo}></Image>
                  <Stack w='full'>
                    <CardBody>
                      <Heading fontSize='xl'>
                        {repo.owner !== 'Helloyunho' ? `${repo.owner}/` : ''}
                        {repo.repo}
                      </Heading>
                      <Text py='2'>{repo.description}</Text>
                    </CardBody>
                    <Divider />
                    <CardFooter alignItems='center' justifyContent='end'>
                      <Text>Go check it out!</Text>
                      <ArrowForwardIcon pl='0.5' />
                    </CardFooter>
                  </Stack>
                </Card>
              </a>
            ))}
            <a href='https://github.com/Helloyunho'>
              <Button>And more...</Button>
            </a>
          </Stack>
        </Skeleton>
      </Container>
      <footer>
        <Center p='4'>
          <VStack>
            <Text>Made with ❤️ by Helloyunho</Text>
            <a href='https://github.com/Helloyunho/About-me'>
              <Text>Also the whole site is open-sourced!</Text>
            </a>
          </VStack>
        </Center>
      </footer>
    </>
  )
}
