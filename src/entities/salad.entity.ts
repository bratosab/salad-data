import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dressing } from './dressing.entity';
import { Topping } from './topping.entity';

@Entity()
export class Salad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @ManyToMany(() => Dressing, (dressing) => dressing.id, { cascade: true })
  @JoinTable()
  dressing: Dressing;

  @ManyToMany(() => Topping, (topping) => topping.id, { cascade: true })
  @JoinTable()
  toppings: Topping[];
}
