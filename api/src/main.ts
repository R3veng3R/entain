import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
    logger: ['log', 'warn', 'error'],
  });
  app.setGlobalPrefix('/api');
  await app.listen(8081);
}

bootstrap();
