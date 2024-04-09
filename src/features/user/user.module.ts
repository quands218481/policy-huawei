import { UserController } from './controller/user.controller';
import {
  Module,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { UserService } from './service/user.service';

@Module({
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule implements OnModuleInit, OnModuleDestroy {
  constructor() {}

  onModuleInit() {
    // return this.deleteConnections();
  }

  onModuleDestroy() {
    // return this.deleteConnections();
  }

  private deleteConnections() {
    // return this.socketConnectionService.deleteAllConnections();
  }
}
