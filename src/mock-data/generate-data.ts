// Creates fake data for use on this demo eCommerce site
// It is intended to demonstrate scalability
import faker from 'faker';
import { Product, User } from '../types/types.d';

// Generates data about products
// Generates a set number of random products
export const generateProducts = (count: number): Product[] => {
  const mockProducts = [] as Product[];
  for ( let i=0; i<count; i++) {
    const mockProduct: Product = {
      id: faker.random.uuid(),
      name: faker.random.words(2),
      // Forcing a float value on a random number. Forcing 2 decimal places for currency
      price: parseFloat(faker.random.number({min: 1, max: 2000, precision: 0.01}).toFixed(2)),
      details: faker.lorem.paragraph(4)
    } as Product;
    mockProducts.push(mockProduct);
  }
  return mockProducts;
}

// Generates data about users
// Generates a set number of random products
export const generateUsers = (count: number): User[] => {
  const mockUsers = [];
  for ( let i=0; i<count; i++) {
    const mockUser: User = {
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      hasCoupon: false,
      couponCode: null,
      purchases: []
    };
    mockUsers.push(mockUser);
  }
  return mockUsers;
}