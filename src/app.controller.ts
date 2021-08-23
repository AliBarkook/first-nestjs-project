import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ host: 'localhost:4200' })
export class AppController {
  constructor(
    private readonly appService: AppService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
