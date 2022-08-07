import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

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

  @IsOptional()
  thumbnail: File | string;
}