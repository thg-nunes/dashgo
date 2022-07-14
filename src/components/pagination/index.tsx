import { useState } from "react"
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { PaginationItem } from "./paginationItem"

type PaginationProps = {
  pageActive: number
  totalPage: number
  setPage: (page: number) => void
}

export const Pagination = ({ pageActive, totalPage, setPage }: PaginationProps) => {
  const totalPages = [...new Array(totalPage / 10)].map((_, index) => index + 1)
  const firstPage = 1
  const lastPage = totalPages.length
  const init_slice = pageActive === 1 ? 0 : (pageActive - 2)
  const end_slice = pageActive === 1 ? pageActive + 2 : pageActive + 1
  const buttonsPageVisible = totalPages.slice((init_slice), (end_slice))
  console.log(totalPages)

  return (
    <Flex justify={'space-between'} pt='8' align={'center'} flexDir={['column', 'row']}>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Box>
        <Stack spacing={'4'} flexDir='row' align={'center'} direction='row' mt={['4', '0']}>
          <Flex>
            {(firstPage + 2) < pageActive && (
              <>
                <PaginationItem number={1} onPageChange={() => setPage(1)} />
                <Text w='8' align='center'>...</Text>
              </>
            )}

            <Stack spacing={'4'} flexDir='row' align={'center'} direction='row' mt={['4', '0']}>
              {buttonsPageVisible.map(page => (
                  <PaginationItem
                    onPageChange={setPage}
                    key={page}
                    number={page}
                    isCurrent={page === pageActive ? true : false}
                  />
                ))
              }
            </Stack>

            {pageActive + 2 < lastPage && (
              <>
                <Text w='8' align='center'>...</Text>
                <PaginationItem number={totalPage / 10} onPageChange={() => setPage(totalPage / 10)} />
              </>
            )}
          </Flex>
      </Stack>
      </Box>
    </Flex>
  )
}
