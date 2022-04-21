import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Esta linea permite que no lleguen datos que no esten declarados en el Dto.
      whitelist: true,
      //Esta linea permite recibir una notificación al momento de recibir un campo que no este declarado en el Dto.
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
