import { Module } from '@nestjs/common';
import { PcategoryService } from './pcategory.service';
import { PcategoryController } from './pcategory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pcategory } from './pcategory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pcategory])
  ],
  controllers: [PcategoryController],
  providers: [PcategoryService]
})
export class PcategoryModule {}
