import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autonomy } from 'src/autonomy/autonomy.entity';
import { Province } from 'src/provinces/provinces.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: process.env.NEST_PASSWORD, // sustituir por variable de entorno
            // password: process.env.NEST_PASSWORD,
            database: 'backend_weatherloo',
            entities: [
                // __dirname + 'src/**/*.model.ts'
                //AGREGAR LAS ENTIDADES
               Autonomy, Province
            ],
            synchronize: true, // generar tablas automáticamente en base a entidades
            logging: true
        })
    ]
})
export class DatabaseModule {}
