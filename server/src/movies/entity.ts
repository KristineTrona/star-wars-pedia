import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, ManyToOne} from 'typeorm'
import { IsString, IsNumber} from '../../node_modules/class-validator';
import Character from '../characters/entity'

@Entity()
export default class Movie extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsNumber()
  @Column('integer', {nullable:false})
  episodeId: number

  @IsString()
  @Column('text', {nullable: true})
  imageURL: string

  @OneToMany(_ => Character, character => character.movies, {eager:true})
  characters: Character[]

}

@Entity()
@Index(['movie', 'character'], {unique:true})
export class CharactersMovie extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => Movie, movie => movie.characters)
  movie: Movie

  @ManyToOne(_ => Character, character => character.movies)
  character: Character

}
