import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import {PlanetsClimate} from '../planets/entity'

@Entity()
export default class Climate extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @OneToMany(_ => PlanetsClimate, planetsClimate => planetsClimate.climate)
  planetsClimate: PlanetsClimate[]

}
