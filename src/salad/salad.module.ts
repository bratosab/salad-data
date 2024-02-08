import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salad } from '../entities/salad.entity';
import { Topping } from '../entities/topping.entity';
import { Dressing } from '../entities/dressing.entity';
import { SaladController } from './salad.controller';
import { SaladService } from './salad.service';
import { DressingService } from './dressing.service';
import { ToppingService } from './topping.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salad, Topping, Dressing])],
  controllers: [SaladController],
  providers: [SaladService, DressingService, ToppingService],
})
export class SaladModule {}
