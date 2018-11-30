import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import Character from '../characters/entity'

@Entity()
export default class Planet extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsString()
  @Column('text', {nullable: false})
  climate: string

  @OneToMany(_ => Character, character => character.planet, {eager:true})
  characters: Character[]

}
