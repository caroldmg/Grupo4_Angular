import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProvincesModule } from './provinces/provinces.module';

@Module({
  imports: [DatabaseModule, ProvincesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
