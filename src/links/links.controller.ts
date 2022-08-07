import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { Link } from './entities/link.entity';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

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

  @Delete('/:id')
  deleteSingleLink(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.linksService.deleteSingleLink(id);
  }
}
