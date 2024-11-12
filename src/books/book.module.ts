import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';

@Module({
  controllers: [BooksController]
})
export class Book {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public numberOfPages: number,
  ) {}
}
