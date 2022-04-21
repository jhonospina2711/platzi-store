import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { UsersController } from './controllers/users.controller';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { BrandsController } from './controllers/brands.controller';
import { CustomersController } from './controllers/customers.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CustomersService } from './services/customers.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    BrandsController,
    CustomersController,
  ],
  providers: [
    AppService,
    ProductsService,
    UsersService,
    CustomersService,
    BrandsService,
    CategoriesService,
  ],
})
export class AppModule {}
