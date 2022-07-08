import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export const Input = ({ name, label, ...rest }: InputProps) => {
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
        _hover={{bg: 'gray-900'}}
        {...rest}
      />
    </FormControl>
  )
}