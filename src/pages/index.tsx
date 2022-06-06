import { Button, Flex, Stack} from '@chakra-ui/react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  const { register, handleSubmit } = useForm()

    const handleSignin: SubmitHandler<FieldValues> = (values, event) => {
      console.log(values)
    }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form"
        onSubmit={handleSubmit(handleSignin)}
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail"  {...register('email')}/>

          <Input name="password" type="password" label="Senha" {...register('password')} />
        </Stack>
      
        <Button type='submit' mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
