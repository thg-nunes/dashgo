import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  users: {
    id: string
    name: string
    email: string
    createdAt: string
  } []
}

const getUsers = async (page: number) => {
  const { data, headers } = await api.get<User>('/users', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
  }))

  return { users, totalCount }
}

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page) , {
    staleTime: 1000 * 5 // 5 segundos para revalidar o cache
  })
}
