import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';


@Module({
  imports: [
    UserModule,
  ],
  controllers: [],
  exports: [
    UserModule,
  ],
})
export class FeaturesModule {}
