import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { userDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  create(@Body() user: userDto) {
    this.userService.create(user);
  }
}
