import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaladService } from './salad.service';
import { ToppingService } from './topping.service';
import { DressingService } from './dressing.service';
import { Salad } from '../entities/salad.entity';
import { Topping } from '../entities/topping.entity';
import { Dressing } from '../entities/dressing.entity';

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
    return salads;
  }

  @Post()
  async addSalad(@Body() salad: Salad) {
    const createdSalad = await this.saladService.add(salad);
    return createdSalad;
  }

  @Post('topping')
  async addTopping(@Body() topping: Topping) {
    const createdTopping = await this.toppingService.add(topping);
    return createdTopping;
  }

  @Post('dressing')
  async addDressing(@Body() dressing: Dressing) {
    const createdDressing = await this.dressingService.add(dressing);
    return createdDressing;
  }
}
