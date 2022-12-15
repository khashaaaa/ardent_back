import { Module } from '@nestjs/common';
import { PsubcategoryService } from './psubcategory.service';
import { PsubcategoryController } from './psubcategory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Psubcategory } from './psubcategory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Psubcategory])
  ],
  controllers: [PsubcategoryController],
  providers: [PsubcategoryService]
})
export class PsubcategoryModule {}
