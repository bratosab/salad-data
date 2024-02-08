import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salad } from '../entities/salad.entity';
import { Topping } from '../entities/topping.entity';
import { Dressing } from '../entities/dressing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salad, Topping, Dressing])],
})
export class SaladModule {}
