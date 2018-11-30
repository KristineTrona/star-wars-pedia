import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { IsString, MinLength, IsNumber} from '../../node_modules/class-validator';
import Movie from '../movies/entity'
import Planet from '../planets/entity'

@Entity()
export default class Character extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text', {nullable:false})
  name: string

  @IsString()
  @Column('text', {nullable:false})
  gender: string

  @IsNumber()
  @Column('integer', {nullable: true})
  height: number

  @IsString()
  @Column('text', {nullable: true})
  birthYear: string

  @IsString()
  @Column('text', {nullable: true})
  hairColor: string

  @OneToMany(_ => Movie, movie => movie.characters)
  movies: Movie[]

  @ManyToOne(_ => Planet, planet => planet.characters)
  planet: Planet

}

