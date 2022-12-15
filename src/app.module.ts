import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envconfig } from '../config/envconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerModule } from './consumer/consumer.module';
import { PaymethodModule } from './paymethod/paymethod.module';
import { PcategoryModule } from './pcategory/pcategory.module';
import { PsubcategoryModule } from './psubcategory/psubcategory.module';
import { MerchantModule } from './merchant/merchant.module';
import { ProductModule } from './product/product.module';
import { CartitemsModule } from './cartitems/cartitems.module';
import { PorderModule } from './porder/porder.module';
import { AuthModule } from './auth/auth.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/variables/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [envconfig]
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(<string>process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PWD,
      database: process.env.PG_NAME,
      synchronize: true,
      autoLoadEntities: true
    }),
    ConsumerModule,
    PaymethodModule,
    PcategoryModule,
    PsubcategoryModule,
    MerchantModule,
    ProductModule,
    CartitemsModule,
    PorderModule,
    AuthModule,
    BrandModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
