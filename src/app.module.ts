import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [PrismaModule, ArticleModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
