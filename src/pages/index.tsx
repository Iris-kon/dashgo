import { Button, Flex, FormControl, FormLabel, Input, Stack} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>

            <Input 
              id="email"
              name="email" 
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filed"
              size="lg"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>

            <Input 
              id="password"
              name="password" 
              type="password" 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filed"
              size="lg"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>
        </Stack>
      
        <Button type='submit' mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
