import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateCategoryDto } from 'src/dtos/category.dtos';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  @Get()
  findCategories() {
    return this.categoriesService.findCategories();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.categoriesService.findOne(productId);
  }

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Delete(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  deleteCategory(@Param('productId', ParseIntPipe) productId: number) {
    return this.categoriesService.deleteCategory(productId);
  }
}
