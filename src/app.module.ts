import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './books/book.module';

@Module({
  imports: [Book],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
