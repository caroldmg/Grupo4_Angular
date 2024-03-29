import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Town } from './towns.entity';

@Injectable()
export class TownsService {
    constructor(
        @InjectRepository(Town) private townRepo: Repository<Town>
    ){}

    findAll(): Promise<Town[]>{ //con relaciones
        return this.townRepo.find({
            relations: {
                province: true
            }
        })
    }



    findById(townCode: string): Promise <Town | null>{
        return this.townRepo.findOne({
            relations: {
                province: true
            },
            where: {
                townCode: townCode
            }
        })
    }

    findAllByProvinceId(provinceId: string): Promise<Town[]>{
        return this.townRepo.find({
            relations: {
                province: true
            },
            where: {
                province: {
                    id: provinceId
                }
            }
        })
    }

    findAllByPopularTrue(): Promise <Town[]>{
        return this.townRepo.find({
            relations: {
                province: true
            },
            where: {
                isPopular: true
            }
        })
    }
    searchByTownName(name: string): Promise <Town | null>{
        return this.townRepo.findOne({
            relations: {
                province: true
            },
            where: {
                name: name
            }
        })

    }

    addFavTown(townCode: string): Promise <Town>{
       return this.townRepo.findOne({
        relations: {
            province: true
        },
            where: {
                townCode: townCode
            }
        })
    }
}
