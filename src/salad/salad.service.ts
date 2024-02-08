import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Salad } from '../entities/salad.entity';
import { Topping } from '../entities/topping.entity';
import { Dressing } from '../entities/dressing.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SaladService {
  constructor(
    @InjectRepository(Salad)
    private saladRepo: Repository<Salad>,
    @InjectRepository(Topping)
    private toppingRepo: Repository<Topping>,
    @InjectRepository(Dressing)
    private dressingRepo: Repository<Dressing>,
  ) {}

  findAll() {
    return this.saladRepo.find();
  }

  findOne(id: number) {
    return this.saladRepo.findOneBy({ id });
  }

  add(salad: Salad) {
    return this.saladRepo.save(salad);
  }

  addTopping(topping: Topping) {
    return this.toppingRepo.save(topping);
  }
}
