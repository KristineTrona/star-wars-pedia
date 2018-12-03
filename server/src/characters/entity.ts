import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm'
import { IsString, IsNumber} from '../../node_modules/class-validator';
import {CharactersMovie} from '../movies/entity'
import Planet from '../planets/entity'

@Entity()
export default class Character extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
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

  @OneToMany(_ => CharactersMovie, charactersMovie => charactersMovie.character)
  charactersMovie: CharactersMovie[]

  @ManyToOne(_ => Planet, planet => planet.characters)
  planet: Planet

}

