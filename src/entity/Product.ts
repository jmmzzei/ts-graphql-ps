import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from 'typeorm'
import {Field, ObjectType} from 'type-graphql'

@ObjectType()
@Entity()
export class Product extends BaseEntity{

  @Field()
  @PrimaryGeneratedColumn()
   id!: number

  @Field()
  @Column()
   name!: string

  @Field()
  @Column('int', {default: 0})
   quantity!: number

  @Field()
  @CreateDateColumn({type: "timestamp"})
   createdAt!:string
}
