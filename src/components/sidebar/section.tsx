import { Box, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

type SectionProps = {
  title: string
  children: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <Box>
      <Text fontWeight='bold' fontSize='small' color='gray.400' >{title}</Text>
      {children}
    </Box>
  )
}
