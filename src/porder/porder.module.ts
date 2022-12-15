import { Module } from '@nestjs/common';
import { PorderService } from './porder.service';
import { PorderController } from './porder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Porder } from './porder.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Porder])
  ],
  controllers: [PorderController],
  providers: [PorderService]
})
export class PorderModule {}
