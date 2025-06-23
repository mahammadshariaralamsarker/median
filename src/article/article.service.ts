import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createArticleDto: CreateArticleDto) {
    const data = await this.prisma.article.create({
      data: { ...createArticleDto },
    });
    return { message: 'This action adds a new article', data };
  }

  async findAll() {
    const data = await this.prisma.article.findMany({});
    return { message: `This action returns all article`, data };
  }

  async findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const result = await this.prisma.article.update({
      where: { id },
      data: { ...updateArticleDto },
    });
    return { message: `This action updates a #${id} article`, result };
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
