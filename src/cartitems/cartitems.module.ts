import { Module } from '@nestjs/common';
import { CartitemsService } from './cartitems.service';
import { CartitemsController } from './cartitems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartitem } from './cartitem.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cartitem])
  ],
  controllers: [CartitemsController],
  providers: [CartitemsService]
})
export class CartitemsModule {}
