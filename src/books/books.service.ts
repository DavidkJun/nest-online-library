import { Injectable } from '@nestjs/common';

import { Book } from './book.module'

@Injectable()
export class BooksService {
  books:  Book[] = [];

  insertBook(title: string, desc: string, numOfPag: number ) {
    const bookId = new Date().toString();
    const newBook = new Book(bookId, title, desc, numOfPag);
    this.books.push(newBook)
    return bookId;
  }
}