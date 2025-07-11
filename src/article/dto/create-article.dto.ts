import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @ApiProperty()
  body: string;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
