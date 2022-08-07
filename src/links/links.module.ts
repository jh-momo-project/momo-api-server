import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './entities/link.entity';
import { LinkCategory } from './entities/link-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Link, LinkCategory])],
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
