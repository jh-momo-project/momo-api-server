import { Injectable } from '@nestjs/common';
import { CreateLinkCategoryDto } from './dto/create-link-category.dto';

@Injectable()
export class LinkCategoriesService {
  create(createLinkCategoryDto: CreateLinkCategoryDto) {
    return 'This action adds a new linkCategory';
  }
}
