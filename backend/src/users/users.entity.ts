import { Town } from "src/towns/towns.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum Gender{
    FEM= 'fem',
    MASC= 'masc',
    NB= 'nb',
    UNDETERMINATED= 'underterminated'

}
@Entity()
export class User{


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string;

    @Column({nullable: true})
    birthday: Date;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @Column({nullable: true})
    avatarImage?: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.UNDETERMINATED
    })
    gender: Gender;
    
    @ManyToOne(()=> Town)
    @JoinColumn({name: 'codeTown'})
    location: Town;

    @Column({type: 'boolean', default: false})
    pets: boolean;

    @Column({type: 'boolean', default: false})
    publicTransport: boolean;

    @Column({type: 'boolean', default: false})
    privateTransport: boolean;


    // @ManyToMany(() => Town )
    // @JoinTable({
    //     name: 'userFavTown',
    //     joinColumn: {name: 'id_user'},
    //     inverseJoinColumn: {name: 'id_town'}
    // })
    // favTowns: Town[]
    
}