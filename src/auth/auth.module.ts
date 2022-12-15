import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConsumerModule } from '../consumer/consumer.module';
import { PassportModule } from "@nestjs/passport"
import { LocalStrat } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrat } from './jwt.strategy';

@Module({
  imports: [
    ConsumerModule,
    PassportModule,
    JwtModule.register({
      secret: 'ardent',
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [AuthService, LocalStrat, JwtStrat],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
