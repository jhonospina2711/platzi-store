import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateBrandDto } from 'src/dtos/brand.dtos';
import { BrandsService } from 'src/services/brands.service';
import { ParseIntPipe } from '../common/parse-int.pipe';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Get(':brandId')
  @HttpCode(HttpStatus.ACCEPTED)
  getById(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.findById(brandId);
  }

  //   @Delete('brandId')
  //   delete() {}
}
