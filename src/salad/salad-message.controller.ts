import { Body, Controller } from '@nestjs/common';
import { SaladService } from './salad.service';
import { ToppingService } from './topping.service';
import { DressingService } from './dressing.service';
import { Salad } from '../entities/salad.entity';
import { MessagePattern } from '@nestjs/microservices';
import { Topping } from '../entities/topping.entity';

@Controller()
export class SaladMessageController {
  constructor(
    private readonly saladService: SaladService,
    private readonly dressingService: DressingService,
    private readonly toppingService: ToppingService,
  ) {}

  @MessagePattern('get_salads')
  async getAll() {
    const salads = await this.saladService.findAll();
    return salads;
  }

  @MessagePattern('create_salad')
  async addSalad(salad: Salad) {
    const createdSalad = await this.saladService.add(salad);
    return createdSalad;
  }

  @MessagePattern('add_toppings_salad')
  async addToppingsToSalad(data: { saladId: number; toppings: Topping[] }) {
    return this.saladService.addToppings(data.saladId, data.toppings);
  }
}
