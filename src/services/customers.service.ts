import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customer.dto';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Jhon Gabriel',
      lastName: 'Ospina Orozco',
      phone: '+57 3185839956',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newCurtomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCurtomer);
    return newCurtomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const product = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...product,
      ...payload,
    };
    return this.customers[index];
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
