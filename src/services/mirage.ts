import { createServer, Factory, Model, Response } from 'miragejs'
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

      this.get('/users', function(schema, request) {
        const { page = 1, perpage = 10 } = request.params

        const total = schema.all('user').length

        const page_start = (Number(page) - 1) * Number(perpage)
        const page_end = page_start + Number(perpage)

        const users = this.serialize(schema.all('user'))
          .users.slice(page_start, page_end)

          return new Response(
            200,
            { 'x-total-count': String(total) },
            { users }
          )
      })

      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })
}
