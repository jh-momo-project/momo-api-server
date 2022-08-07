import { Module } from '@nestjs/common';
import { LinkCategoriesService } from './link-categories.service';
import { LinkCategoriesController } from './link-categories.controller';

@Module({
  controllers: [LinkCategoriesController],
  providers: [LinkCategoriesService]
})
export class LinkCategoriesModule {}
