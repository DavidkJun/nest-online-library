import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  getHomePage(@Res() res: Response): void {
    const filePath = join(__dirname, '..', 'client', 'homePage.html');
    return res.sendFile(filePath);
  }
  @Get('books')
  getBooksPage(@Res() res: Response ): void {
    const filePath = join(__dirname, '..', '..', 'client', 'booksPage.html');
    res.sendFile(filePath);
  }
}
