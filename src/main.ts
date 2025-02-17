import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port: number =
    configService.get<number>('PORT') ??
    parseInt(process.env.PORT || '3000', 10); // Maneja el puerto dinámico de Railway

  console.log(`Server is running on port ${port}`);
  await app.listen(port);
}

bootstrap();
