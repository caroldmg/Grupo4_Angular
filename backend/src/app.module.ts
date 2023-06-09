import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProvincesModule } from './provinces/provinces.module';
import { TownsModule } from './towns/towns.module';
import { UsersModule } from './users/users.module';
import { FavLocationsModule } from './fav-locations/fav-locations.module';
import { LocalWeatherModule } from './local-weather/local-weather.module';
import { RecomendationModule } from './recomendation/recomendation.module';
import { AutonomyModule } from './autonomy/autonomy.module';

@Module({
  imports: [DatabaseModule, ProvincesModule, TownsModule, UsersModule, FavLocationsModule, LocalWeatherModule, RecomendationModule, AutonomyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
