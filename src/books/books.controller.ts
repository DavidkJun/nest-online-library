import { Controller, Get,Param, Res} from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path'

@Controller('books')
export class BooksController {

  @Get(':book')
  sendBook(@Param('book') book: string, @Res() res: Response){
    const filePath = join(__dirname, '..', '..', 'client', book, 'booksPage.html' );
    res.sendFile(filePath)
  }
}
