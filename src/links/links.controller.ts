import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { CreateLinkCategoryDto } from './dto/create-link-category.dto';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinkCategory } from './entities/link-category.entity';
import { Link } from './entities/link.entity';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  // linkCategories
  @Post('/categories')
  createLinkCategory(@Body() createLinkCategoryDto: CreateLinkCategoryDto): Promise<LinkCategory> {
    return this.linksService.createLinkCategory(createLinkCategoryDto);
  }

  @Get('/categories')
  getAllLinkCategory(): Promise<LinkCategory[]> {
    return this.linksService.getAllLinkCategory();
  }

  @Get('/categories/:categoryId')
  getLinkCategory(@Param('categoryId', ParseIntPipe) id: number): Promise<LinkCategory> {
    return this.linksService.getLinkCategory(id);
  }

  @Delete('/categories')
  deleteLinkCategory(@Query('id', ParseIntPipe) id: number): Promise<string> {
    return this.linksService.deleteLinkCategory(id);
  }

  // links
  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linksService.createLink(createLinkDto);
  }

  @Get('/:id')
  getOneLink(@Param('id', ParseIntPipe) id: number): Promise<Link> {
    return this.linksService.getSingleLink(id);
  }

  @Get()
  getAllLinks(): Promise<Link[]> {
    return this.linksService.getAllLink();
  }

  @Delete()
  deleteSingleLink(@Query('id', ParseIntPipe) id: number): Promise<string> {
    return this.linksService.deleteSingleLink(id);
  }
}
