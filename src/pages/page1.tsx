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
  Progress
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

const myBirthday = new Date(2005, 8, 10) // celebrate me!!

export const Page1 = () => {
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
              <a href='https://discord.com/users/119550317003014144'>
                <FontAwesomeIcon icon={faDiscord} size='2x' color='#5865F2' />
              </a>
              <a href='https://github.com/Helloyunho'>
                <FontAwesomeIcon icon={faGithub} size='2x' color='lightgray' />
              </a>
              <a href='https://twitter.com/helloyunho_'>
                <FontAwesomeIcon icon={faTwitter} size='2x' color='#1DA1F2' />
              </a>
              <a href='https://youtube.com/c/helloyunho'>
                <FontAwesomeIcon icon={faYoutube} size='2x' color='red' />
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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing='8' my='4'>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '32' }}
                src={tsLogo}
                alt='TypeScript'></Image>

              <Stack>
                <CardBody>
                  <Heading fontSize='xl'>TypeScript</Heading>

                  <Text py='2'>
                    I use TypeScript to make web apps and libraries.
                  </Text>
                  <Progress value={90} colorScheme='blue' />
                </CardBody>
              </Stack>
            </Card>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '32' }}
                src={jsLogo}
                alt='JavaScript'></Image>

              <Stack>
                <CardBody>
                  <Heading fontSize='xl'>Swift</Heading>

                  <Text py='2'>
                    I also use JavaScript for small projects and quick
                    prototyping.
                  </Text>
                  <Progress value={80} colorScheme='yellow' />
                </CardBody>
              </Stack>
            </Card>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '32' }}
                src={swiftLogo}
                alt='Swift'></Image>

              <Stack>
                <CardBody>
                  <Heading fontSize='xl'>Swift</Heading>

                  <Text py='2'>
                    I use Swift to make some native apps and libraries, also
                    it's my favorite language.
                  </Text>
                  <Progress value={75} colorScheme='orange' />
                </CardBody>
              </Stack>
            </Card>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '32' }}
                src={pythonLogo}
                alt='Python'></Image>

              <Stack>
                <CardBody>
                  <Heading fontSize='xl'>Python</Heading>

                  <Text py='2'>
                    I use Python to do some quick, non important process.
                  </Text>
                  <Progress value={90} colorScheme='blue' />
                </CardBody>
              </Stack>
            </Card>
          </SimpleGrid>
          <Text color='GrayText'>
            The Swift logo is a trademark of Apple Inc.
          </Text>
        </Box>
      </Container>
      <footer>
        <Center>
          <Text>© 2022 Helloyunho</Text>
        </Center>
      </footer>
    </>
  )
}
