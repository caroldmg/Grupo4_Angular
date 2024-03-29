import { Province } from "src/provinces/provinces.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Town{

    @PrimaryColumn()
    townCode: string;

    // @Column()
    // CODIGOINE: string;

    @ManyToOne(()=> Province)
    @JoinColumn({name: 'id_province'})
    province: Province;

    @Column()
    name: string;

    @Column()
    capitalName: string;

    @Column()
    surface: number;

    @Column({type: 'int'})
    townPopulation: number;

    @Column()
    altitude: number;

    @Column()
    perimeter: number

    @Column({type: 'boolean', default: false})
    isPopular: boolean

    @Column({nullable: true})
    image?: string;
}