import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Link } from './links/entities/link.entity';
import { LinksModule } from './links/links.module';
import { LinkCategoriesModule } from './link-categories/link-categories.module';
import { LinkCategory } from './link-categories/entities/link-category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jihyunan',
      password: 'postgres',
      database: 'momo-db',
      synchronize: true,
      entities: [Link, LinkCategory],
    }),
    LinksModule,
    LinkCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
