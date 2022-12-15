import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ConsumerController } from './consumer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumer } from './consumer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Consumer])
  ],
  controllers: [ConsumerController],
  providers: [ConsumerService],
  exports: [ConsumerService]
})
export class ConsumerModule {}
