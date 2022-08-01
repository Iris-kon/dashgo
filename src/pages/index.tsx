import { Button, Flex, Stack} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { withSSRGuest } from '../utils/withSSRGuest'

type SigninFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  password: yup.string().required("Senha Obrigatória")
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SigninFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const { signIn } = useContext(AuthContext)

  const { errors } = formState

  const handleSignin: SubmitHandler<SigninFormData> = async (values, event) => {
    await signIn(values)
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
          <Input 
            name="email" 
            type="email" 
            label="E-mail"  
            error={errors.email}
            {...register('email')}
          />

          <Input 
            name="password" 
            type="password" 
            label="Senha" 
            {...register('password')} 
          />
        </Stack>
      
        <Button 
          type='submit'
          isLoading={formState.isSubmitting}
          mt="6" 
          colorScheme="pink" 
          size="lg"
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})