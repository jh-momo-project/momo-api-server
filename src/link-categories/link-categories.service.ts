import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkCategoryDto } from './dto/create-link-category.dto';
import { LinkCategory } from './entities/link-category.entity';

@Injectable()
export class LinkCategoriesService {
  constructor(
    @InjectRepository(LinkCategory)
    private linkCategoryRepository: Repository<LinkCategory>,
  ) {}

  async createLinkCategory(createLinkCategoryDto: CreateLinkCategoryDto): Promise<LinkCategory> {
    const { title } = createLinkCategoryDto;
    const linkCategory = this.linkCategoryRepository.create({ title });
    await this.linkCategoryRepository.save(linkCategory);
    return linkCategory;
  }
}
