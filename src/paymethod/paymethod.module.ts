import { Module } from '@nestjs/common';
import { PaymethodService } from './paymethod.service';
import { PaymethodController } from './paymethod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paymethod } from './paymethod.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paymethod])
  ],
  controllers: [PaymethodController],
  providers: [PaymethodService]
})
export class PaymethodModule {}
