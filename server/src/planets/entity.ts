import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Index} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import Character from '../characters/entity'
import Climate from '../climates/entity'

@Entity()
export default class Planet extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:true})
  name: string

  @OneToMany(_ => Character, character => character.planet, {eager:true})
  characters: Character[]

  @OneToMany(_ => PlanetsClimate, planetsClimate => planetsClimate.planet, {nullable: true})
  planetClimates: PlanetsClimate[]

}

@Entity()
@Index(['planet', 'climate'], {unique:true})
export class PlanetsClimate extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => Planet, planet => planet.planetClimates, {eager: true})
  planet: Planet

  @ManyToOne(_ => Climate, climate=> climate.planetsClimate)
  climate: Climate

}