import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

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

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email()
        },
        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users')

      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })
}
