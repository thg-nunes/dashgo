import { Flex } from "@chakra-ui/react";
import { Header } from "../components/header";
import { SideBar } from "../components/sideBar";

export default function Dashboard() {
  return (
    <Flex flexDir='column'h='100vh'>
      <Header />

      <Flex w='100%' maxW={1480} mx='auto' px='6' my='6' >
        <SideBar />
      </Flex>
    </Flex>
  )
}
