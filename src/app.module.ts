import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaladModule } from './salad/salad.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'salad-maria',
      autoLoadEntities: true,
      synchronize: true,
      logging: 'all',
    }),
    SaladModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
