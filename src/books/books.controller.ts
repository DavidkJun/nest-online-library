import { Controller, Get, Post, Patch, Delete,Body } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly  booksService : BooksService) {}
  @Post()
  addBook(
    @Body('title') bookTitle:string,
    @Body('description') bookDesc: string,
    @Body('numberOfPages') bookNumOfPag: number
  ):any {
     const generatedId = this.booksService.insertBook(
       bookTitle,bookDesc,bookNumOfPag
     );
     return {id: generatedId};
  }
}
