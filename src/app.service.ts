import { Injectable } from '@nestjs/common';
import { TodoInterface } from './todo/types/TodoInterface';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Testest kely!';
  }
}
