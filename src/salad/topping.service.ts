import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Topping } from '../entities/topping.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ToppingService {
  constructor(
    @InjectRepository(Topping)
    private toppingRepo: Repository<Topping>,
  ) {}

  findAll() {
    return this.toppingRepo.find();
  }

  findOne(id: number) {
    return this.toppingRepo.findOneBy({ id });
  }

  add(topping: Topping) {
    return this.toppingRepo.save(topping);
  }
}
