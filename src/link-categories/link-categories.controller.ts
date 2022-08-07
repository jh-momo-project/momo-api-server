import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkCategoriesService } from './link-categories.service';
import { CreateLinkCategoryDto } from './dto/create-link-category.dto';

@Controller('link-categories')
export class LinkCategoriesController {
  constructor(private readonly linkCategoriesService: LinkCategoriesService) {}

  @Post()
  create(@Body() createLinkCategoryDto: CreateLinkCategoryDto) {
    return this.linkCategoriesService.create(createLinkCategoryDto);
  }
}
