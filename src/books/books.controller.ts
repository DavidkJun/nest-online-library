import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Post()
  addBook(): any {

  }
}
