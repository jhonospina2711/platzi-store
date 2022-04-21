import { Module } from '@nestjs/common';

import { ProductsController } from './controller/products.controller';
import { CategoriesController } from './controller/categories.controller';
import { ProductsService } from './servicies/products.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
