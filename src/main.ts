import { NestFactory, SerializedGraph } from '@nestjs/core';
import { AppModule } from './app.module';
import { writeFile } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  await app.listen(5000);
  writeFile('./reports/graph.json', app.get(SerializedGraph).toString(), () =>
    console.log('Report saved'),
  );
}
bootstrap();
