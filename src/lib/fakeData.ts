import { faker } from '@faker-js/faker'
import { getRandomItemArray } from './utils'
import { Order } from '@/interfaces/Order'

const listOrders: Order[] = []

for(let i = 0; i < 30; i++) {
  const iteration = i+1
  listOrders.push({
    id: iteration,
    email:faker.internet.email(),
    car: faker.vehicle.vehicle(),
    start_rent: faker.date.anytime(),
    finish_rent: faker.date.anytime(),
    price: Number(faker.commerce.price({min: 100000, max: 99999999})),
    status: getRandomItemArray(['in-rent', 'finish-rent', 'cancel', 'waiting-confirmation'])
  })
}

export {
  listOrders
}