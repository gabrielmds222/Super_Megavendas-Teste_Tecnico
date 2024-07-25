import { Injectable } from '@nestjs/common';
import { userDto } from './user.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashAsync } from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: userDto[] = [];
  create(newUser: userDto) {
    newUser.id = uuid();
    newUser.password = bcryptHashAsync(newUser.password, 10);
    this.users.push(newUser);
  }

  findByUserName(username: string): userDto | null {
    return this.users.find((user) => user.username === username);
  }
}
