import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brand.dtos';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Marca 1',
      image: '',
    },
  ];
  findAll() {
    return this.brands;
  }

  findById(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }

  update(id: number, payload: UpdateBrandDto) {
    this.brands = this.brands.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          ...payload,
        };
      }
      return {
        ...data,
      };
    });
    return this.brands;
  }

  create(payload: CreateBrandDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }
}
