import { User } from './user.entity';
import { Product } from '../entities/product.entity';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
