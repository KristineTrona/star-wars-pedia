import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import Character from '../characters/entity'

@Entity()
export default class Movie extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsString()
  @Column('text', {nullable: false})
  description: string

  @IsString()
  @Column('text', {nullable: true})
  imageURL: string

  @OneToMany(_ => Character, character => character.movies, {eager:true})
  characters: Character[]

}
