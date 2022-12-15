import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const swagConf = new DocumentBuilder()
  .setTitle('Ardent universal shop')
  .setDescription('REST API for Ardent')
  .setVersion('1.0')
  .build()

  const swagDoc = SwaggerModule.createDocument(app, swagConf)

  SwaggerModule.setup('swagger', app, swagDoc)
  
  await app.listen(8282);
}
bootstrap();
