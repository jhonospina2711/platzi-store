import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Categoria 1',
      description: 'Producto de prueba',
    },
  ];

  create(payload: CreateCategoryDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return category;
  }

  findCategories() {
    return this.categories;
  }

  deleteCategory(id: number) {
    //TODO: encontrar el index en el array del idCategory
    const index = this.categories.findIndex((item) => item.id === id);
    //TODO: Si el index es
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }

  updateCategory(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }
}
