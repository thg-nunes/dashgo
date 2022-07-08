import { Box, Button, Flex, Stack } from "@chakra-ui/react"

export const Pagination = () => {
  return (
    <Flex justify={'space-between'} pt='8' align={'center'}>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Box>
        <Stack spacing={'4'} flexDir='row' align={'center'} direction='row'>
          <Button borderRadius={8} fontSize='sm' bg='gray.500' _hover={{bg: 'gray.300'}} colorScheme='pink' disabled _disabled={{
            bg: 'pink.500', cursor: 'default'
          }}>1</Button>
          <Button borderRadius={8} fontSize='sm' bg='gray.500' _hover={{bg: 'gray.300'}} color='whiteAlpha.700'>2</Button>
          <Button borderRadius={8} fontSize='sm' bg='gray.500' _hover={{bg: 'gray.300'}} color='whiteAlpha.700'>3</Button>
        </Stack>
      </Box>
    </Flex>
  )
}
