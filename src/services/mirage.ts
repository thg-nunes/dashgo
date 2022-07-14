import { createServer, Model } from 'miragejs'

type User = {
  name: string
  email: string
  created_At: string
}

export function makeServer() {
  createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users', () => {
        return {}
      })

      this.post('/users', () => {
        return {}
      })

      this.namespace = ''
      this.passthrough()
    }
  })
}
