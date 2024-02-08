import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaladService } from './salad.service';
import { ToppingService } from './topping.service';
import { DressingService } from './dressing.service';
import { Salad } from '../entities/salad.entity';

@Controller('salad')
export class SaladController {
  constructor(
    private readonly saladService: SaladService,
    private readonly dressingService: DressingService,
    private readonly toppingService: ToppingService,
  ) {}

  @Get()
  async getAll() {
    const salads = await this.saladService.findAll();
    console.log(salads);
    return salads;
  }

  @Post()
  async addSalad(@Body() salad: Salad) {
    const createdSalad = await this.saladService.add(salad);
    console.log(createdSalad);
    return createdSalad;
  }
}
