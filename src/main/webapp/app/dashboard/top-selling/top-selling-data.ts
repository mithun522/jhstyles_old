export interface Product {
  image: string;
  uname: string;
  gmail: string;
  productName: string;
  status: string;
  weeks: number;
  budget: string;
}

export const TopSelling: Product[] = [
  {
    image: '../../content/images/users/user1.png',
    uname: 'Hanna Gover',
    gmail: 'hgover@gmail.com',
    productName: 'Flexy React',
    status: 'danger',
    weeks: 35,
    budget: '95K',
  },
  {
    image: '../../content/images/users/user2.png',
    uname: 'Hanna Gover',
    gmail: 'hgover@gmail.com',
    productName: 'Landing pro React',
    status: 'info',
    weeks: 35,
    budget: '95K',
  },
  {
    image: '../../content/images/users/user3.png',
    uname: 'Hanna Gover',
    gmail: 'hgover@gmail.com',
    productName: 'Elite React	',
    status: 'warning',
    weeks: 35,
    budget: '95K',
  },
  {
    image: '../../content/images/users/user4.png',
    uname: 'Hanna Gover',
    gmail: 'hgover@gmail.com',
    productName: 'Ample React',
    status: 'success',
    weeks: 35,
    budget: '95K',
  },
];
