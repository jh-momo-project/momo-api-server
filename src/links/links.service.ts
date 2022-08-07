import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import successResGenerator, { SuccessReponse } from 'src/common/responseGenerator';
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
  async createLinkCategory(createLinkCategoryDto: CreateLinkCategoryDto): Promise<SuccessReponse<LinkCategory>> {
    const { title } = createLinkCategoryDto;
    const linkCategory = this.linkCategoriesRepository.create({ title });
    await this.linkCategoriesRepository.save(linkCategory);
    return successResGenerator(linkCategory);
  }

  async getAllLinkCategory(): Promise<SuccessReponse<LinkCategory[]>> {
    const categories = await this.linkCategoriesRepository.find();
    return successResGenerator(categories);
  }

  async getLinkCategory(id: number): Promise<SuccessReponse<LinkCategory>> {
    const category = await this.linkCategoriesRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException('해당 카테고리가 없습니다');
    }
    return successResGenerator(category);
  }

  async deleteLinkCategory(id: number): Promise<SuccessReponse<string>> {
    await this.linkCategoriesRepository.delete({ id });
    return successResGenerator();
  }

  // links
  async createLink(createLinkDto: CreateLinkDto): Promise<SuccessReponse<Link>> {
    const { url, title, description, categoryId } = createLinkDto;
    const category = await this.linkCategoriesRepository.findOneBy({ id: categoryId });
    if (!category) {
      throw new NotFoundException('해당 카테고리가 없습니다.');
    }
    const newLink = this.linksRepository.create({ url, title, description, category });
    await this.linksRepository.save(newLink);
    return successResGenerator(newLink);
  }

  async getAllLink(): Promise<SuccessReponse<Link[]>> {
    const links = await this.linksRepository.find();
    return successResGenerator(links);
  }

  async getLinksByCategories(categoryId: number): Promise<SuccessReponse<Link[]>> {
    const category = await this.linkCategoriesRepository.findOneBy({ id: categoryId });
    if (!category) {
      throw new NotFoundException('해당 카테고리가 없습니다.');
    }
    const links = await this.linksRepository.find({ where: { category } });
    return successResGenerator(links);
  }

  async getSingleLink(id: number): Promise<SuccessReponse<Link>> {
    const link = await this.linksRepository.findOneBy({ id });
    return successResGenerator(link);
  }

  async deleteSingleLink(id: number): Promise<SuccessReponse<string>> {
    await this.linksRepository.delete({ id });
    return successResGenerator();
  }
}
