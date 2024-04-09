import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import * as exphbs from 'express-handlebars'

async function bootstrap() {
  const helpers = {
    convert: (number) => number.toLocalString(),
  };
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.enableCors();
  app.enableShutdownHooks();
  const hbs = exphbs.create({
    defaultLayout: 'index',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    helpers
  });

  app.engine('handlebars', hbs.engine);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const port = 3000;
  const logger = new Logger('NestApplication');

  await app.listen(port, () =>
    logger.log(`Server initialized on port ${port}`),
  );
}

bootstrap();
