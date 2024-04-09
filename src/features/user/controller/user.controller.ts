import { Controller, Get, Param, Post, Query, Render } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('policy')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  @Render('policy')
  getPolicy(){
    // return this.userService.test()
  }
}
