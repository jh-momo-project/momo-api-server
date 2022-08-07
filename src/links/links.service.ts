import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkCategoryDto } from './dto/create-link-category.dto';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinkCategory } from './entities/link-category.entity';
import { Link } from './entities/link.entity';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private linksRepository: Repository<Link>,
    @InjectRepository(LinkCategory)
    private linkCategoriesRepository: Repository<LinkCategory>,
  ) {}

  // link-categories
  async createLinkCategory(createLinkCategoryDto: CreateLinkCategoryDto): Promise<LinkCategory> {
    const { title } = createLinkCategoryDto;
    const linkCategory = this.linkCategoriesRepository.create({ title });
    await this.linkCategoriesRepository.save(linkCategory);
    return linkCategory;
  }

  async getAllLinkCategory(): Promise<LinkCategory[]> {
    const categories = await this.linkCategoriesRepository.find();
    return categories;
  }

  async getLinkCategory(id: number): Promise<LinkCategory> {
    const category = this.linkCategoriesRepository.findOneBy({ id });
    return category;
  }

  async deleteLinkCategory(id: number): Promise<string> {
    await this.linkCategoriesRepository.delete({ id });
    return 'success';
  }

  // links
  async createLink(createLinkDto: CreateLinkDto): Promise<Link> {
    const { url, title, description, categoryId } = createLinkDto;
    const category = await this.linkCategoriesRepository.findOneBy({ id: categoryId });
    if (!category) {
      throw new NotFoundException('해당 카테고리가 없습니다.');
    }
    const newLink = this.linksRepository.create({ url, title, description, category });
    await this.linksRepository.save(newLink);
    return newLink;
  }

  async getAllLink(): Promise<Link[]> {
    const links = await this.linksRepository.find();
    return links;
  }

  async getSingleLink(id: number): Promise<Link> {
    const link = await this.linksRepository.findOneBy({ id });
    return link;
  }

  async deleteSingleLink(id: number) {
    await this.linksRepository.delete({ id });
    return 'completed';
  }
}
