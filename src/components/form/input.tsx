import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        size={'lg'}
        focusBorderColor='pink.500'
        variant={'filled'}
        bg={'gray.900'}
        ref={ref}
        _hover={{bg: 'gray-900'}}
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
