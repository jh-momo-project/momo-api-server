import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLinkCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
