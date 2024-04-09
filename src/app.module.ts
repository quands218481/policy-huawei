import { FeaturesModule } from './features/features.module';
import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

import { APP_FILTER, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    FeaturesModule,
    ConfigModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true }),
    }
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
