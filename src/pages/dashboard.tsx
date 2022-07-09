import dynamic from "next/dynamic";
import { SimpleGrid, Flex, Box, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/header";
import { SideBar } from "../components/sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[500]
    },
    axisTicks: {
      color: theme.colors.gray[500]
    },
    categories: [
      '2022-08-05-T00:00:00.00Z',
      '2022-08-07-T00:00:00.00Z',
      '2022-08-11-T00:00:00.00Z',
      '2022-08-15-T00:00:00.00Z',
      '2022-08-16-T00:00:00.00Z',
      '2022-08-23-T00:00:00.00Z',
      '2022-08-25-T00:00:00.00Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  {name: 'inscritos', data: [15, 50, 205, 18, 64, 315, 23]}
]

export default function Dashboard() {
  return (
    <Flex flexDir='column'h='100vh'>
      <Header />

      <Flex w='100%' maxW={1480} mx='auto' px='6' my='6' >
        <SideBar />

        <SimpleGrid gap={'4'} minChildWidth={320} flex='1' alignItems={'flex-start'}>
          <Box p={8} borderRadius='8' bg='gray.800'>
            <Text>Inscritos Por Dia</Text>
            <Chart options={options} series={series} height={160} type='area'/>
          </Box>
          <Box p={8} borderRadius='8' bg='gray.800'>
            <Text>Taxe de Abertura</Text>
            <Chart options={options} series={series} height={160} type='area'/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
