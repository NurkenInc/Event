import {
  Text,
  Container,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

const Logotype = () => {

  return (
    <Container 
      as={'span'}
      alignItems={'center'}
      fontSize={'18px'}
      lineHeight={'20px'}
      padding={'10px'}
      display={'inline-flex'}
      fontWeight={'bold'}
    >
      <Image src={'../../../public/event.png'} />
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily={'M PLUS Rounded 1c'}
        fontWeight={'bold'}
        ml={'3'}
      >
        Event
      </Text>
    </Container>
  )
}

export default Logotype