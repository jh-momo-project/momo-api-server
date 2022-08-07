import { Controller, Post, Body } from '@nestjs/common';
import { LinkCategoriesService } from './link-categories.service';
import { CreateLinkCategoryDto } from './dto/create-link-category.dto';
import { LinkCategory } from './entities/link-category.entity';

@Controller('link-categories')
export class LinkCategoriesController {
  constructor(private readonly linkCategoriesService: LinkCategoriesService) {}

  @Post()
  createLinkCategory(@Body() createLinkCategoryDto: CreateLinkCategoryDto): Promise<LinkCategory> {
    return this.linkCategoriesService.createLinkCategory(createLinkCategoryDto);
  }
}
