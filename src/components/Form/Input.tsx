import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react"

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, type, label, ...rest}, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        type="password"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filed"
        size="lg"
        _hover={{
          bgColor: 'gray.900'
        }}
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)