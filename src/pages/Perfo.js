import React, { memo, useState, useCallback, useMemo } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import {
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Button,
  Badge
} from '@chakra-ui/react'

export default function Perfo() {
  const [counter, setCounter] = useState(0)
  const [isThemeDark, setIsThemeDark] = useState(!true)

  const handleClick = useCallback(() => {
    setCounter((c) => c + 1)
  }, [])

  const handleThemeChange = () => {
    console.log('olar')
    setIsThemeDark((dark) => !dark)
  }

  //  const handleClick = useCallback(() => {
  //     setCounter((c) => c + 1)
  //   }, [])

  return (
    <Flex flexDirection="column" padding="8">
      <Flex>
        <Heading as="h2" size="lg">
          Father 2
        </Heading>
      </Flex>
      <Flex flexDirection="column">
        <Filho1 handleClick={handleClick} />
        <Filho2 counter={counter} />
      </Flex>
      <Flex flexDirection="column">
        <Filho3 isThemeDark={isThemeDark} />
        <Filho4 handleThemeChange={handleThemeChange} />
      </Flex>
    </Flex>
  )
}

const Filho1 = memo(({ handleClick }) => {
  console.log('rerender Filho 1 <<>>')
  return (
    <Box>
      <Button onClick={handleClick}>Update my own State</Button>
    </Box>
  )
})

const Filho2 = ({ counter }) => {
  //continua sendo re-render mas o calculo está rapido pois memoizado
  const value = useMemo(() => heavyFormatCounter(counter), [counter])

  console.log(' <<>> rerender Filho 2', counter, value)

  return (
    <Box px={24} bg="tomato">
      <Heading as="h2" size="lg">
        {value}
      </Heading>
    </Box>
  )
}

const Filho3 = ({ isThemeDark }) => {
  const themed = {
    bg: isThemeDark ? '#333010' : '#F3F3F3',
    color: isThemeDark ? '#F3F3F3' : '#333010'
  }
  console.log('rerender Filho 3 <<>>')
  return (
    <Box px="36" my="5" py="12" borderRadius="md" {...themed}>
      teste!
    </Box>
  )
}

const Filho4 = ({ handleThemeChange }) => {
  console.log('rerender Filho 4 <<>>')
  return (
    <Box>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Dark theme
        </FormLabel>
        <br />
        <Switch
          onChange={handleThemeChange}
          colorScheme="telegram"
          value="on"
        />
      </FormControl>
    </Box>
  )
}

const heavyFormatCounter = (value) => {
  //   console.log('start heavy calc')
  // 1000000000
  for (let i = 0; i < 1000000000; i++) {}
  //   console.log('finish heavy calc')
  return `The value is: ${value}`
}
