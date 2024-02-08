import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dressing } from '../entities/dressing.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DressingService {
  constructor(
    @InjectRepository(Dressing)
    private dressingRepo: Repository<Dressing>,
  ) {}

  findAll() {
    return this.dressingRepo.find();
  }

  findOne(id: number) {
    return this.dressingRepo.findOneBy({ id });
  }

  add(dressing: Dressing) {
    return this.dressingRepo.save(dressing);
  }
}
