import { Module } from '@nestjs/common';
import { LinkCategoriesService } from './link-categories.service';
import { LinkCategoriesController } from './link-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkCategory } from './entities/link-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkCategory])],
  controllers: [LinkCategoriesController],
  providers: [LinkCategoriesService],
})
export class LinkCategoriesModule {}
