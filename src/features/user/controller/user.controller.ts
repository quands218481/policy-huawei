import { Controller, Get, Param, Post, Query, Render } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  @Render('policy')
  getPolicy(){
    // return this.userService.test()
  }
}
