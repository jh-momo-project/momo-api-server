import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class LinksService {
  create(createLinkDto: CreateLinkDto) {
    // create logic
    return createLinkDto;
  }
}
