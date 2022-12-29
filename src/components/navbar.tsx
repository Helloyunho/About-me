import {
  Flex,
  Heading,
  Box,
  Spacer,
  IconButton,
  useColorMode,
  HStack,
  Avatar
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import myProfile from '../images/avatar.png'

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <nav>
        <Flex minWidth='max-content' p='4'>
          <Box p='2'>
            <a href='/'>
              <HStack cursor='pointer'>
                <Avatar
                  name='Helloyunho'
                  src={myProfile}
                  bg='transparent'
                  width='8'
                  height='8'
                />
                <Heading size='md'>Helloyunho</Heading>
              </HStack>
            </a>
          </Box>
          <Spacer />
          <Box>
            <HStack spacing='4' display='flex'>
              <IconButton
                aria-label='switch-theme'
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
              />
            </HStack>
          </Box>
        </Flex>
      </nav>
    </>
  )
}

export default NavBar
