import { Button } from "@chakra-ui/react"

type PaginationItemProps = {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}
export const PaginationItem = ({ isCurrent = false, number, onPageChange }:PaginationItemProps) => {
  if(isCurrent) {
    return (
      <Button
        borderRadius={8}
        fontSize='sm' bg='gray.500'
        _hover={{bg: 'gray.300'}}
        colorScheme='pink'
        disabled
          _disabled={{
          bg: 'pink.500', cursor: 'default'
        }}
        >
        {number}
      </Button>
    )
  }

  return (
    <Button
      borderRadius={8}
      fontSize='sm'
      bg='gray.500'
      _hover={{bg: 'gray.300'}}
      color='whiteAlpha.700'
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
