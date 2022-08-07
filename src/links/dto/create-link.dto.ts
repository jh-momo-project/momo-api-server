import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateLinkDto {
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsOptional()
  @MinLength(0)
  @MaxLength(16)
  title: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
