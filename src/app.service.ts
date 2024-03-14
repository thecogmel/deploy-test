import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Api with GraphQL rodando na Digital Ocean!';
  }
}
